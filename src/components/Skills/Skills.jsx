import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Network,
  Shield,
  Terminal,
  Cloud,
  Database,
  Layers3
} from "lucide-react";

import "./Skills.css";

const skillGroups = [
  {
    number: "01",
    icon: Shield,
    title: "Cyber Security",
    description:
      "Application security, vulnerability analysis and security-first development.",
    skills: [
      "Web Security",
      "Ethical Hacking",
      "OWASP",
      "Vulnerability Analysis",
      "CTF"
    ]
  },
  {
    number: "02",
    icon: Code2,
    title: "Development",
    description:
      "Building modern interfaces and backend systems with a focus on clean architecture.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Python",
      "C",
      "C++"
    ]
  },
  {
    number: "03",
    icon: Network,
    title: "Networking",
    description:
      "Understanding how systems communicate and how network infrastructure can be secured.",
    skills: [
      "TCP/IP",
      "HTTP",
      "DNS",
      "OSI Model",
      "Network Security"
    ]
  },
  {
    number: "04",
    icon: Terminal,
    title: "Systems & Tools",
    description:
      "Working with development environments, operating systems and security tooling.",
    skills: [
      "Linux",
      "Git",
      "GitHub",
      "CLI",
      "Bash"
    ]
  },
  {
    number: "05",
    icon: Database,
    title: "Backend & Data",
    description:
      "Creating APIs, authentication systems and applications backed by structured data.",
    skills: [
      "REST API",
      "Flask",
      "FastAPI",
      "SQLite",
      "SQL"
    ]
  },
  {
    number: "06",
    icon: Cloud,
    title: "Cloud & Deployment",
    description:
      "Exploring modern deployment workflows and cloud-oriented application architecture.",
    skills: [
      "GitHub Pages",
      "Render",
      "Deployment",
      "Environment Variables"
    ]
  }
];

function Skills() {
  return (
    <section
      id="skills"
      className="skills-section section"
    >
      <div className="container">

        {/* Header */}

        <motion.div
          className="skills-header"
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
              02 / Expertise
            </p>

            <h2 className="section-title">
              Tools for
              <br />
              <em>building.</em>
            </h2>

          </div>

          <p className="skills-header-description">
            A growing technical toolkit built around
            development, security and understanding
            how systems work underneath.
          </p>

        </motion.div>


        {/* Skills grid */}

        <div className="skills-grid">

          {skillGroups.map((group, index) => {

            const Icon = group.icon;

            return (
              <motion.article
                className="skill-card"
                key={group.number}
                initial={{
                  opacity: 0,
                  y: 35
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true,
                  amount: 0.15
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08
                }}
                whileHover={{
                  y: -7
                }}
              >

                <div className="skill-card-top">

                  <span className="skill-number">
                    {group.number}
                  </span>

                  <div className="skill-icon">
                    <Icon
                      size={21}
                      strokeWidth={1.2}
                    />
                  </div>

                </div>


                <div className="skill-card-content">

                  <h3>
                    {group.title}
                  </h3>

                  <p>
                    {group.description}
                  </p>

                </div>


                <div className="skill-list">

                  {group.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}

                </div>


                <div className="skill-card-line" />

              </motion.article>
            );
          })}

        </div>


        {/* Bottom statement */}

        <motion.div
          className="skills-bottom"
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

          <div className="skills-bottom-icon">
            <Layers3
              size={20}
              strokeWidth={1.2}
            />
          </div>

          <p>
            <strong>
              The stack changes.
            </strong>{" "}
            The fundamentals don't.
          </p>

          <span>
            Always learning →
          </span>

        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
