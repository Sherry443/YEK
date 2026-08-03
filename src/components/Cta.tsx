export const Cta1 = () => {
  return (
    <section className="cta-banner fix section-padding">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-8">
            <div className="section-title mb-0">
              <span className="sub-title wow fadeInUp">
                <i className="far fa-heart" />
                Join Us
              </span>
              <h2 className="mt-char-animation">
                Become a Part of Yaran e Khair
              </h2>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
            <a
              href="https://forms.cloud.microsoft/r/aNQ55TmKcy"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn wow fadeInUp"
              data-wow-delay=".3s"
            >
              <i className="fal fa-user-plus" />
              Apply
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export const Cta5 = () => {
  return (
    <section
      className="cta-video-section-2 fix section-padding bg-cover"
      style={{ backgroundImage: 'url("assets/img/about/maxresdefault.jpg")' }}
    >
      <div className="container">
        <div className="cta-video-wrapper d-block center">
          <div className="section-title">
            <span className="sub-title color-2 wow fadeInUp">
              <i className="far fa-heart" />
              Scholarship Program
            </span>
            <h2 className="mt-char-animation text-white">
              We are united for <br />
              Others
            </h2>
          </div>
          <div
            className="video-play-btn pt-4 mt-md-0 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <a
              href="https://www.youtube.com/watch?v=mti1IwGFSS8"
              className="video-btn ripple video-popup"
            >
              <i className="fas fa-play" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=mti1IwGFSS8"
              className="video-text video-popup wow fadeInUp"
              data-wow-delay=".5s"
            >
              Play Video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
