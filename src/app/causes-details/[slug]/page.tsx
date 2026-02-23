import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import causesData from "@/data/causes.json";

// ─── Types ────────────────────────────────────────────────────────────────────

type CauseFull = {
  id: number;
  slug: string;
  list: {
    category: string;
    image: string;
    title: string;
    progress: number;
    raised: number;
    goal: number;
    author: string;
    delay: string;
  };
  details: {
    category: string;
    bannerImage: string;
    title: string;
    progress: number;
    raised: number;
    goal: number;
    description: string;
    fullContent: string[];
    goals: string[];
    contentImages: string[];
    sidebarGallery: string[];
  };
};

// ─── Static Params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return (causesData as CauseFull[]).map((cause) => ({
    slug: cause.slug,
  }));
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const CausesDetailsPage = ({ params }: { params: { slug: string } }) => {
  const cause = (causesData as CauseFull[]).find(
    (c) => c.slug === params.slug
  );

  if (!cause) notFound();

  const { details, list } = cause;

  // Sidebar: all other causes (excluding current)
  const otherCauses = (causesData as CauseFull[]).filter(
    (c) => c.slug !== cause.slug
  );

  return (
    <DanboxLayout>
      <section className="causes-details-section fix section-padding">
        <div className="container">
          <div className="causes-details-wrapper">
            <div className="row g-5">

              {/* ── Main Content ── */}
              <div className="col-lg-8">
                <div className="causes-details-items">

                  {/* Banner Image */}
                  <div className="details-image">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src={details.bannerImage}
                      alt={details.title}
                    />
                  </div>

                  {/* Donation Form */}
                  <div className="details-content">
                    <span className="sub-text">
                      <i className="far fa-heart" /> {details.category}
                    </span>
                    <h2>{details.title}</h2>

                    {/* Progress Bar */}
                    <div className="progress-items">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          data-wow-duration=".9s"
                          role="progressbar"
                          style={{ width: `${details.progress}%` }}
                          aria-valuenow={details.progress}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="cause-amount d-flex">
                        <div className="price-raised">
                          <i className="fal fa-donate" />
                          <span>{details.raised}</span> Raised
                        </div>
                        <div className="price-goal">
                          <i className="far fa-analytics" />
                          <span>${details.goal}</span> Goal
                        </div>
                      </div>
                    </div>

    
                  </div>

                  {/* Full Content */}
                  <div className="causes-contents">
                    {details.fullContent.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}

                    {/* Content Images */}
                    {details.contentImages.length > 0 && (
                      <div className="row g-4">
                        {details.contentImages.map((img, i) => (
                          <div className="col-md-6" key={i}>
                            <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                              src={img}
                              alt={`${details.title} image ${i + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Goals */}
                    <h3>Our Goals</h3>
                    <p>
                      Surely access to basic support should be a human right in the{" "}
                      <b>21st century</b>. If you can only give{" "}
                      <Link href="/donation-details">£10</Link> just this one time, it
                      will still make a difference.
                    </p>
                    <ul>
                      {details.goals.map((goal, i) => (
                        <li key={i}>{goal}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* ── Sidebar ── */}
              <div className="col-lg-4">
                <div className="casues-sidebar-wrapper">

                  {/* Categories */}
                  <div className="single-sidebar-widgets">
                    <div className="widget-title">
                      <h4>Categories</h4>
                    </div>
                    <ul>
                      {["All", "Education", "Health", "Water", "Food & Water", "Medical"].map((cat) => (
                        <li key={cat}>
                          <Link href="/causes">
                            {cat}{" "}
                            <span>
                              {cat === "All"
                                ? causesData.length
                                : (causesData as CauseFull[]).filter(
                                    (c) => c.list.category === cat
                                  ).length}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Gallery */}
                  <div className="single-sidebar-widgets">
                    <div className="widget-title">
                      <h4>Gallery</h4>
                    </div>
                    <div className="causue-gallery-wid">
                      {details.sidebarGallery.map((img, i) => (
                        <a
                          key={i}
                          href={img}
                          className={`single-cause-img img-popup bg-cover${
                            i === details.sidebarGallery.length - 1 ? " mb-0" : ""
                          }`}
                          style={{ backgroundImage: `url("${img}")` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Related Causes */}
                  {otherCauses.length > 0 && (
                    <div className="single-sidebar-widgets">
                      <div className="widget-title">
                        <h4>Related Causes</h4>
                      </div>
                      <ul>
                        {otherCauses.slice(0, 5).map((c) => (
                          <li key={c.id}>
                            <Link href={`/causes-details/${c.slug}`}>
                              {c.list.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Widget */}
                  <div
                    className="sidebar-promo-widgets bg-cover text-white text-center"
                    style={{ backgroundImage: 'url("/assets/img/causes/cause1.jpg")' }}
                  >
                    <span>Call To Action</span>
                    <h3>There are no secrets to success</h3>
                    <Link href="/contact" className="theme-btn">
                      Get In Touch
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default CausesDetailsPage;