import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  LockKeyhole,
  Network,
  SearchCode
} from "lucide-react";

import "./Services.css";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web Development",
    description:
      "Modern responsive interfaces and full stack applications built with clean, maintainable architecture.",
    tags: ["React", "JavaScript", "Python"]
  },
  {
    number: "02",
    icon: LockKeyhole,
    title: "Application Security",
    description:
      "Security-focused development with authentication, authorization and defensive application design.",
    tags: ["RBAC", "OWASP", "Auth"]
  },
  {
    number: "03",
    icon: SearchCode,
    title: "Security Analysis",
    description:
      "Exploring vulnerabilities, analyzing application behavior and identifying potential security weaknesses.",
    tags: ["Web Security", "Analysis", "CTF"]
  },
  {
    number: "04",
    icon: Network,
    title: "Network Fundamentals",
    description:
      "Understanding protocols, communication layers and the infrastructure behind connected systems.",
    tags: ["TCP/IP", "HTTP", "DNS"]
  }
];

function Services() {
  return (
    <section
      id="services"
      className="services-section section"
    >
      <div className="container">

        <motion.div
          className="services-header"
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
              05 / What I Offer
            </p>

            <h2 className="section-title">
              Built with
              <br />
              <em>purpose.</em>
            </h2>

          </div>

          <p className="services-intro">
            I combine development and security to
            approach digital products from both sides
            of the system.
          </p>
        </motion.div>


        <div className="services-list">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <motion.article
                className="service-row"
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 25
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
                  duration: 0.65,
                  delay: index * 0.08
                }}
              >

                <div className="service-number">
                  {service.number}
                </div>


                <div className="service-icon">
                  <Icon
                    size={23}
                    strokeWidth={1.2}
                  />
                </div>


                <div className="service-main">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                </div>


                <div className="service-tags">

                  {service.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>


                <div className="service-arrow">
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.2}
                  />
                </div>

              </motion.article>
            );
          })}

        </div>


        <motion.div
          className="services-statement"
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
        >
          <span>
            APPROACH
          </span>

          <p>
            <em>Understand.</em>{" "}
            <em>Build.</em>{" "}
            <em>Break.</em>{" "}
            <strong>Improve.</strong>
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Services;
