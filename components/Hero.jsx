import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-intro">Hello, I'm</p>

          <h1>
            Aamir <span>Hussain</span>
          </h1>

          <h2>
            WordPress Developer
            <span className="title-accent"> & Front-End Developer</span>
          </h2>

          <p className="hero-description">
            I build responsive, modern and user-friendly websites tailored
            to business and client requirements. I specialize in WordPress
            development and also work with modern front-end technologies
            including React and Next.js.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a
              href="/cv/Aamir-Hussain-CV.pdf"
              download
              className="secondary-btn"
            >
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/aamirh7"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aamir-hussain-webdev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://www.fiverr.com/aamirh7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fiverr
            </a>
          </div>
        </div>

        <div className="hero-image-area">
          <div className="image-glow"></div>

          <div className="profile-frame">
            <Image
              src="/images/profile/aamir-profile.jpeg"
              alt="Aamir Hussain"
              width={480}
              height={580}
              priority
              className="profile-image"
            />
          </div>
        </div>

      </div>
    </section>
  );
}