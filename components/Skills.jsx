const skillGroups = [
  {
    title: "WordPress & CMS",
    skills: [
      "WordPress",
      "Elementor",
      "WooCommerce",
      "Custom Theme Development",
    ],
  },
  {
    title: "Front-End Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">MY EXPERTISE</p>

          <h2 className="section-title">
            Skills & <span>Technologies</span>
          </h2>

          <p className="section-description">
            Technologies and tools I use to build modern, responsive and
            business-focused websites.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}