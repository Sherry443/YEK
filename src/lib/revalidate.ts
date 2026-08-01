export async function triggerRevalidate(paths: string[]) {
  try {
    await fetch("/api/revalidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paths }),
    });
  } catch {
    // best-effort — the page's own ISR interval will pick up the change eventually
  }
}
