"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { triggerRevalidate } from "@/lib/revalidate";

export default function DeleteButton({
  table,
  id,
  confirmMessage = "Are you sure you want to delete this item?",
  revalidatePaths,
}: {
  table: string;
  id: string;
  confirmMessage?: string;
  revalidatePaths?: string[];
}) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm(confirmMessage)) return;
    setDeleting(true);
    const supabase = createClient();
    const { error } = await supabase.from(table).delete().eq("id", id);
    setDeleting(false);
    if (error) {
      window.alert(`Failed to delete: ${error.message}`);
      return;
    }
    if (revalidatePaths?.length) {
      await triggerRevalidate(revalidatePaths);
    }
    router.refresh();
  };

  return (
    <button
      className="admin-btn admin-btn-danger admin-btn-sm"
      onClick={handleDelete}
      disabled={deleting}
    >
      {deleting ? "Deleting..." : "Delete"}
    </button>
  );
}
