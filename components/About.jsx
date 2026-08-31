import Image from "next/image";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container about-grid">
        <div className="about-image-area">
          <div className="about-image-frame">
            <Image
              src="/images/profile/aamir-about.png"
              alt="Aamir Hussain"
              width={450}
              height={540}
              className="about-image"
            />
          </div>
        </div>

        <div className="about-content">
          <p className="section-label">ABOUT ME</p>

          <h2 className="section-title">
            Building Websites That Are
            <span> Modern & Effective</span>
          </h2>

          <p>
            I&apos;m Aamir Hussain, a WordPress Developer and Front-End
            Developer with professional experience in building responsive,
            user-friendly and client-focused websites.
          </p>

          <p>
            My experience includes WordPress development, Elementor, custom
            theme development, HTML, CSS and JavaScript customization. Alongside
            WordPress, I also work with modern front-end technologies including
            React and Next.js.
          </p>

          <div className="about-stats">
            <div className="stat-card">
              <strong>1+</strong>
              <span>Years Experience</span>
            </div>

            <div className="stat-card">
              <strong>5+</strong>
              <span>Completed Projects</span>
            </div>

            <div className="stat-card">
              <strong>2</strong>
              <span>Core Specializations</span>
            </div>
          </div>

          <a
            href="/cv/Aamir-Hussain-CV.pdf"
            download
            className="primary-btn about-cv-btn"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}