import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Shield,
  ScanSearch,
  CloudSun
} from "lucide-react";

import "./Projects.css";

const projects = [
  {
    number: "01",
    category: "CYBER SECURITY",
    title: "AuthShield",
    description:
      "A role-based authentication and authorization system designed around secure access control and protected application resources.",
    tags: ["Python", "Flask", "SQLite", "RBAC"],
    icon: Shield,
    featured: true,
    github: "#",
    demo: "#"
  },
  {
    number: "02",
    category: "SECURITY TOOL",
    title: "WebShield",
    description:
      "A web vulnerability analysis concept focused on identifying common application security weaknesses and presenting actionable findings.",
    tags: ["Python", "Web Security", "HTTP", "Scanner"],
    icon: ScanSearch,
    featured: false,
    github: "#",
    demo: "#"
  },
  {
    number: "03",
    category: "DEVELOPMENT",
    title: "Weather Forecast",
    description:
      "A lightweight weather application using an external API to retrieve and display real-time forecast information.",
    tags: ["Python", "REST API", "JSON", "OpenWeather"],
    icon: CloudSun,
    featured: false,
    github: "#",
    demo: "#"
  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="projects-section section"
    >
      <div className="container">

        {/* Header */}

        <motion.div
          className="projects-header"
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.2
          }}
          transition={{
            duration: 0.8
          }}
        >
          <div>

            <p className="section-label">
              04 / Selected Work
            </p>

            <h2 className="section-title">
              Things I've
              <br />
              <em>built.</em>
            </h2>

          </div>

          <p className="projects-intro">
            A selection of projects where development,
            security and problem solving come together.
          </p>
        </motion.div>


        {/* Projects */}

        <div className="projects-list">

          {projects.map((project, index) => {

            const Icon = project.icon;

            return (
              <motion.article
                className={`project-case ${
                  project.featured
                    ? "project-featured"
                    : ""
                }`}
                key={project.number}
                initial={{
                  opacity: 0,
                  y: 45
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true,
                  amount: 0.12
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12
                }}
              >

                {/* Visual */}

                <div className="project-visual">

                  <div className="project-visual-background" />

                  <div className="project-visual-grid" />

                  <div className="project-visual-circle">

                    <Icon
                      size={65}
                      strokeWidth={0.75}
                    />

                  </div>

                  <span className="project-visual-number">
                    {project.number}
                  </span>

                  <span className="project-visual-label">
                    SECURE / DIGITAL / SYSTEM
                  </span>

                  <div className="project-visual-corner" />

                </div>


                {/* Information */}

                <div className="project-information">

                  <div className="project-meta">

                    <span>
                      {project.category}
                    </span>

                    <span>
                      {project.number} / 03
                    </span>

                  </div>


                  <h3>
                    {project.title}
                  </h3>


                  <p className="project-description">
                    {project.description}
                  </p>


                  <div className="project-tags">

                    {project.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>


                  <div className="project-actions">

                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github
                        size={15}
                        strokeWidth={1.5}
                      />

                      <span>
                        GitHub
                      </span>
                    </a>


                    <a
                      href={project.demo}
                      className="project-link project-link-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        View Project
                      </span>

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                      />
                    </a>

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>


        {/* More projects */}

        <motion.div
          className="projects-footer"
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
        >

          <span>
            MORE PROJECTS
          </span>

          <div className="projects-footer-line" />

          <a
            href="#"
            className="all-projects-link"
          >
            Explore GitHub

            <ArrowUpRight
              size={16}
              strokeWidth={1.3}
            />
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Projects;
