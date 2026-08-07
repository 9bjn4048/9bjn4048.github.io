import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  ShieldCheck
} from "lucide-react";

import "./About.css";

const stats = [
  {
    value: "10+",
    label: "Projects"
  },
  {
    value: "05+",
    label: "Hackathons"
  },
  {
    value: "15+",
    label: "Technologies"
  },
  {
    value: "∞",
    label: "Curiosity"
  }
];

function About() {
  return (
    <section
      id="about"
      className="about-section section"
    >
      <div className="container">

        {/* Section heading */}

        <motion.div
          className="about-heading"
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
          <p className="section-label">
            01 / Who I Am
          </p>

          <h2 className="section-title">
            Not just another
            <br />
            <em>developer.</em>
          </h2>
        </motion.div>


        {/* Main editorial layout */}

        <div className="about-layout">

          {/* Visual */}

          <motion.div
            className="about-visual"
            initial={{
              opacity: 0,
              x: -40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              duration: 0.9
            }}
          >

            <div className="about-image-frame">

              {/* Replace this block with your profile image later */}

              <div className="about-placeholder">

                <span className="placeholder-number">
                  01
                </span>

                <div className="placeholder-symbol">
                  <ShieldCheck
                    size={58}
                    strokeWidth={0.8}
                  />
                </div>

                <span className="placeholder-text">
                  AVINASH / CYBER
                </span>

              </div>

              <div className="image-overlay" />

            </div>


            <div className="about-image-caption">

              <span>
                AVINASH K
              </span>

              <span>
                CHENNAI / INDIA
              </span>

            </div>

          </motion.div>


          {/* Content */}

          <motion.div
            className="about-content"
            initial={{
              opacity: 0,
              x: 40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              duration: 0.9,
              delay: 0.15
            }}
          >

            <div className="about-introduction">

              <span className="about-small-label">
                THE APPROACH
              </span>

              <p className="about-lead">
                I build with two perspectives in mind:
                the person creating the system and the
                person trying to break it.
              </p>

              <p className="about-description">
                I'm currently pursuing B.E. in Cyber Security,
                while developing my skills across full stack
                development, application security, networking
                and system design.
              </p>

              <p className="about-description">
                My goal is simple — create digital products
                that are not only useful and beautiful, but
                also designed with security from the beginning.
              </p>

            </div>


            {/* Education */}

            <div className="about-education">

              <div className="education-icon">
                <GraduationCap
                  size={20}
                  strokeWidth={1.3}
                />
              </div>

              <div className="education-content">

                <span>
                  CURRENTLY STUDYING
                </span>

                <strong>
                  B.E. Cyber Security
                </strong>

                <p>
                  SRM Valliammai Engineering College
                </p>

              </div>

              <ArrowUpRight
                className="education-arrow"
                size={18}
                strokeWidth={1.2}
              />

            </div>


            {/* Skill direction */}

            <div className="about-focus">

              <div className="focus-icon">
                <Code2
                  size={20}
                  strokeWidth={1.3}
                />
              </div>

              <div>

                <span>
                  CURRENT FOCUS
                </span>

                <strong>
                  Secure Full Stack Applications
                </strong>

              </div>

            </div>

          </motion.div>

        </div>


        {/* Statistics */}

        <motion.div
          className="about-stats"
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

          {stats.map((stat, index) => (
            <div
              className="about-stat"
              key={stat.label}
            >

              <span className="stat-index">
                0{index + 1}
              </span>

              <strong>
                {stat.value}
              </strong>

              <span>
                {stat.label}
              </span>

            </div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default About;
