import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "Roshni Ghar",
    category: "E-commerce Website",
    description:
      "A modern lighting e-commerce website built with WordPress and WooCommerce, featuring an elegant shopping experience, responsive design, dynamic product listings, and a user-friendly interface..",
    image: "/images/projects/roshni-ghar.png",
    technologies: ["Next.js", "WordPress", "E-commerce"],
    liveLink: "https://roshnighar.com/",
  },
  {
    number: "02",
    title: "React E-commerce",
    category: "E-commerce Web Application",
    description:
      "A responsive e-commerce application built with React, React Router and Tailwind CSS using Vite.",
    image: "/images/projects/react-ecommerce.png",
    technologies: ["React", "React Router", "Tailwind CSS", "Vite"],
    liveLink:
      "https://newecommerceap.netlify.app/",
  },
  {
    number: "03",
    title: "Rank Logics",
    category: "Digital Marketing Agency",
    description:
      "A professional WordPress website developed for a digital marketing company to showcase its services and online presence.",
    image: "/images/projects/rank-logics.png",
    technologies: ["WordPress", "Responsive Design"],
    liveLink: "http://ranklogics.net/",
  },
  {
    number: "04",
    title: "Lady Hustle",
    category: "E-commerce Website",
    description:
      "A WordPress-based e-commerce website designed to showcase products in a clean and user-friendly shopping experience.",
    image: "/images/projects/lady-hustle.png",
    technologies: ["WordPress", "E-commerce"],
    liveLink: "https://ldh.wuaze.com/",
  },
  {
    number: "05",
    title: "Coffee Website",
    category: "Static Business Website",
    description:
      "A responsive coffee shop website featuring a hero section, menu, testimonials, gallery and contact section.",
    image: "/images/projects/coffee-website.png",
    technologies: ["HTML5", "CSS3", "Responsive Design"],
    liveLink: "https://aamirh7.github.io/coffee-website/",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">MY WORK</p>

          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>

          <p className="section-description">
            A selection of websites and web applications I have developed
            using WordPress and modern front-end technologies.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>

              <div className="project-image-wrapper">
                <Image
                  src={project.image}
                  alt={`${project.title} website`}
                  width={800}
                  height={500}
                  className="project-image"
                />

                <div className="project-overlay">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-live-button"
                  >
                    View Live Website ↗
                  </a>
                </div>

                <span className="project-number">
                  {project.number}
                </span>
              </div>

              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Visit Project
                  <span>↗</span>
                </a>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}