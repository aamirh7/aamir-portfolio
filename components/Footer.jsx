export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            <span>AH</span>

            <div>
              <strong>Aamir Hussain</strong>
              <small>
                WordPress Developer & Front-End Developer
              </small>
            </div>
          </a>

          <p>
            I build responsive, modern and business-focused websites using
            WordPress and modern front-end technologies including React and
            Next.js.
          </p>

          <a
            href="/cv/Aamir-Hussain-CV.pdf"
            download
            className="footer-cv"
          >
            Download CV ↓
          </a>

        </div>


        {/* QUICK LINKS */}
        <div className="footer-links">

          <h4>Quick Links</h4>

          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

        </div>


        {/* CONTACT INFORMATION */}
        <div className="footer-contact">

          <h4>Contact</h4>

          <div className="footer-contact-list">

            {/* EMAIL */}
            <a
              href="mailto:aamirhussainkot707@gmail.com"
              className="footer-contact-item"
            >
              <div className="footer-contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>

              <div>
                <span>Email</span>
                <strong>
                  aamirhussainkot707@gmail.com
                </strong>
              </div>
            </a>


            {/* PHONE */}
            <div className="footer-contact-item">

              <div className="footer-contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                </svg>
              </div>

              <div>
                <span>Phone</span>
                <strong>YOUR PHONE NUMBER</strong>
              </div>

            </div>


            {/* LOCATION */}
            <div className="footer-contact-item">

              <div className="footer-contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <div>
                <span>Location</span>
                <strong>Lahore, Pakistan</strong>
              </div>

            </div>

          </div>

        </div>


        {/* SOCIAL LINKS */}
        <div className="footer-connect">

          <h4>Follow Me</h4>

          <div className="footer-social-buttons">

            {/* GitHub */}
            <a
              href="https://github.com/aamirh7"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-button"
            >
              <span className="footer-social-icon">
                GH
              </span>

              <div>
                <strong>GitHub</strong>
                <small>@aamirh7</small>
              </div>
            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aamir-hussain-webdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-button"
            >
              <span className="footer-social-icon">
                in
              </span>

              <div>
                <strong>LinkedIn</strong>
                <small>Connect with me</small>
              </div>
            </a>


            {/* Fiverr */}
            <a
              href="https://www.fiverr.com/aamirh7"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-button"
            >
              <span className="footer-social-icon">
                fi
              </span>

              <div>
                <strong>Fiverr</strong>
                <small>@aamirh7</small>
              </div>
            </a>

          </div>

        </div>

      </div>


      {/* BOTTOM FOOTER */}

      <div className="footer-bottom">

        <p>
          © {currentYear} Aamir Hussain. All Rights Reserved.
        </p>

        <p className="footer-built">
          WordPress Developer & Front-End Developer
        </p>

        <a href="#home">
          Back to top ↑
        </a>

      </div>

    </footer>
  );
}