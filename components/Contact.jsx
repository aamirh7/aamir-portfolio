"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`
    );

    window.location.href =
      `mailto:aamirhussainkot707@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">GET IN TOUCH</p>

          <h2 className="section-title">
            Let&apos;s Work <span>Together</span>
          </h2>

          <p className="section-description">
            Have a website project, WordPress requirement or front-end
            development opportunity? Feel free to get in touch.
          </p>
        </div>

        <div className="contact-grid">

          {/* LEFT SIDE */}

          <div className="contact-info">

            <div className="contact-intro">
              <h3>Have a project in mind?</h3>

              <p>
                I&apos;m available to discuss WordPress websites, responsive
                front-end development and modern web projects.
              </p>
            </div>

            <div className="contact-details">

              <a
                href="mailto:aamirhussainkot707@gmail.com"
                className="contact-detail-card"
              >
                <div className="contact-icon">@</div>

                <div>
                  <span>Email</span>
                  <strong>
                    aamirhussainkot707@gmail.com
                  </strong>
                </div>
              </a>

              <div className="contact-detail-card">
                <div className="contact-icon">⌖</div>

                <div>
                  <span>Location</span>
                  <strong>Lahore, Pakistan</strong>
                </div>
              </div>

            </div>

            <div className="social-area">

              <p>Connect with me</p>

              <div className="social-links">

                <a
                  href="https://github.com/aamirh7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <strong>GH</strong>
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/aamir-hussain-webdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <strong>in</strong>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://www.fiverr.com/aamirh7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fiverr"
                >
                  <strong>fi</strong>
                  <span>Fiverr</span>
                </a>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project discussion"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="7"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message
              <span>↗</span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}