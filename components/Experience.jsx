const experiences = [
  {
    role: "WordPress Developer / Website Developer",
    company: "Devxore",
    location: "Lahore, Pakistan",
    period: "July 2025 — Present",
    description:
      "Developing responsive and client-focused WordPress websites with emphasis on clean design, usability and business requirements.",
    points: [
      "Responsive WordPress website development",
      "Elementor page building and customization",
      "Custom theme development",
      "HTML, CSS and JavaScript customization",
      "Website revisions and improvements",
      "Client requirement based website delivery",
    ],
  },
  {
    role: "Web Development Intern",
    company: "IDEO College",
    location: "Arfa Kareem Tower, Lahore",
    period: "July 2024 — February 2025",
    description:
      "Worked on modern front-end development fundamentals, responsive user interfaces and API-based web development.",
    points: [
      "HTML, CSS and JavaScript development",
      "Responsive UI development",
      "React components",
      "REST API integration",
      "Fetch API and Axios",
      "Flexbox and CSS Grid",
      "Bootstrap and Tailwind CSS",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">MY JOURNEY</p>

          <h2 className="section-title">
            Professional <span>Experience</span>
          </h2>

          <p className="section-description">
            My professional journey in WordPress and modern web development.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <article className="experience-item" key={experience.company}>

              <div className="timeline-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="experience-card">
                <div className="experience-top">
                  <div>
                    <h3>{experience.role}</h3>
                    <h4>{experience.company}</h4>
                  </div>

                  <span className="experience-period">
                    {experience.period}
                  </span>
                </div>

                <p className="experience-location">
                  {experience.location}
                </p>

                <p className="experience-description">
                  {experience.description}
                </p>

                <ul className="experience-points">
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}