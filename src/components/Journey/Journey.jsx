import { motion } from "framer-motion";
import {
  BookOpen,
  Code2,
  Flag,
  Rocket,
  ShieldCheck
} from "lucide-react";

import "./Journey.css";

const milestones = [
  {
    year: "2025",
    number: "01",
    icon: BookOpen,
    title: "The Foundation",
    description:
      "Started my engineering journey and began exploring programming, web development and the fundamentals of computer systems.",
    tags: ["C", "Python", "HTML", "CSS"]
  },
  {
    year: "2025",
    number: "02",
    icon: ShieldCheck,
    title: "Into Cyber Security",
    description:
      "Moved deeper into cybersecurity, learning networking, Linux, web security and the fundamentals of ethical hacking.",
    tags: ["Networking", "Linux", "Web Security"]
  },
  {
    year: "2025",
    number: "03",
    icon: Code2,
    title: "Building Systems",
    description:
      "Started turning what I learned into practical applications, authentication systems, security tools and full stack projects.",
    tags: ["React", "Flask", "SQL", "Git"]
  },
  {
    year: "2026",
    number: "04",
    icon: Flag,
    title: "Hackathons & Challenges",
    description:
      "Started participating in technical challenges and hackathons, focusing on solving real problems with security-driven ideas.",
    tags: ["Hackathons", "CTF", "Problem Solving"]
  },
  {
    year: "2026",
    number: "05",
    icon: Rocket,
    title: "Building Forward",
    description:
      "Expanding into advanced application security, backend engineering, cloud technologies and industry-oriented projects.",
    tags: ["Security", "Backend", "Cloud"]
  }
];

function Journey() {
  return (
    <section
      id="journey"
      className="journey-section section"
    >
      <div className="container">

        {/* Header */}

        <motion.div
          className="journey-header"
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
              03 / The Journey
            </p>

            <h2 className="section-title">
              Still
              <br />
              <em>becoming.</em>
            </h2>
          </div>

          <p className="journey-intro">
            A timeline of what I've learned, built and
            explored so far — with plenty more ahead.
          </p>
        </motion.div>


        {/* Timeline */}

        <div className="journey-timeline">

          <div className="timeline-line">
            <span />
          </div>

          <div className="journey-track">

            {milestones.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.article
                  className="journey-card"
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 40
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
                    duration: 0.7,
                    delay: index * 0.1
                  }}
                >

                  <div className="journey-card-top">

                    <span className="journey-year">
                      {item.year}
                    </span>

                    <span className="journey-number">
                      {item.number}
                    </span>

                  </div>


                  <div className="journey-icon">
                    <Icon
                      size={20}
                      strokeWidth={1.2}
                    />
                  </div>


                  <h3>
                    {item.title}
                  </h3>


                  <p>
                    {item.description}
                  </p>


                  <div className="journey-tags">

                    {item.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>

                </motion.article>
              );
            })}

          </div>

        </div>


        {/* Bottom statement */}

        <motion.div
          className="journey-bottom"
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
            NEXT CHAPTER
          </span>

          <strong>
            Building things that matter.
          </strong>

          <div className="journey-bottom-line" />
        </motion.div>

      </div>
    </section>
  );
}

export default Journey;
