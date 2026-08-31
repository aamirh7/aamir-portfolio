const education = [
  {
    title: "ADP — Web Design & Development",
    institute: "Virtual University of Pakistan",
    period: "In Progress",
    type: "Degree",
    description:
      "Currently pursuing an Associate Degree Program focused on web design and development.",
  },
  {
    title: "MERN Stack Development",
    institute: "6-Month Diploma",
    period: "Completed",
    type: "Professional Training",
    description:
      "Practical foundation in MongoDB, Express.js, React.js, Node.js and REST API based development.",
  },
];

export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">EDUCATION & TRAINING</p>

          <h2 className="section-title">
            Learning & <span>Development</span>
          </h2>

          <p className="section-description">
            Relevant education and technical training supporting my web
            development career.
          </p>
        </div>

        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.title}>

              <div className="education-card-top">
                <span className="education-type">{item.type}</span>
                <span className="education-period">{item.period}</span>
              </div>

              <h3>{item.title}</h3>

              <h4>{item.institute}</h4>

              <p>{item.description}</p>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}