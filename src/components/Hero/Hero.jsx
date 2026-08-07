import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";

import "./Hero.css";

function Hero() {
  const scrollToProjects = () => {
    const projects = document.getElementById("projects");

    if (projects) {
      projects.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const scrollToAbout = () => {
    const about = document.getElementById("about");

    if (about) {
      about.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="hero-section"
    >

      {/* Background decoration */}

      <div className="hero-background">

        <div className="hero-orb hero-orb-one" />

        <div className="hero-orb hero-orb-two" />

        <div className="hero-grid" />

      </div>


      <div className="container hero-container">

        {/* Top status */}

        <motion.div
          className="hero-status"
          initial={{
            opacity: 0,
            y: -15
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8
          }}
        >

          <span className="status-dot" />

          <span>
            AVAILABLE FOR OPPORTUNITIES
          </span>

        </motion.div>


        {/* Main content */}

        <div className="hero-content">

          <div className="hero-copy">

            <motion.p
              className="hero-eyebrow"
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.15
              }}
            >
              CYBER SECURITY / FULL STACK
            </motion.p>


            <motion.h1
              className="hero-title"
              initial={{
                opacity: 0,
                y: 40
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 1,
                delay: 0.25
              }}
            >

              Who

              <span>
                I
              </span>

              <em>
                Am
              </em>

              

            </motion.h1>


            <motion.p
              className="hero-description"
              initial={{
                opacity: 0,
                y: 25
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.45
              }}
            >
              I'm Avinash — a cybersecurity student and
              full stack developer focused on building
              reliable systems, secure applications and
              thoughtful digital experiences.
            </motion.p>


            <motion.div
              className="hero-actions"
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.6
              }}
            >

              <button
                className="hero-button hero-button-dark"
                onClick={scrollToProjects}
              >
                <span>
                  Explore Projects
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                />
              </button>


              <button
                className="hero-button hero-button-outline"
                onClick={scrollToAbout}
              >
                <span>
                  Discover More
                </span>

                <ArrowDown
                  size={16}
                  strokeWidth={1.5}
                />
              </button>

            </motion.div>

          </div>


          {/* Right visual */}

          <motion.div
            className="hero-visual"
            initial={{
              opacity: 0,
              scale: 0.92
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1.2,
              delay: 0.4
            }}
          >

            <div className="hero-visual-frame">

              <div className="visual-noise" />

              <div className="visual-circle">

                <ShieldCheck
                  size={62}
                  strokeWidth={0.8}
                />

              </div>


              <div className="visual-corner visual-corner-top" />

              <div className="visual-corner visual-corner-bottom" />


              <div className="visual-label visual-label-top">
                <span>
                  01
                </span>

                <span>
                  SECURE BY DESIGN
                </span>
              </div>


              <div className="visual-label visual-label-bottom">

                <span>
                  CYBER / 01
                </span>

                <span>
                  2026
                </span>

              </div>

            </div>


            <div className="hero-floating-card">

              <div className="floating-card-icon">

                <ShieldCheck
                  size={18}
                  strokeWidth={1.4}
                />

              </div>

              <div>

                <span>
                  SYSTEM STATUS
                </span>

                <strong>
                  SECURE
                </strong>

              </div>

            </div>

          </motion.div>

        </div>


        {/* Bottom information */}

        <motion.div
          className="hero-bottom"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 1
          }}
        >

          <div className="hero-location">
            <span>BASED IN</span>
            <strong>CHENNAI, INDIA</strong>
          </div>


          <div className="hero-scroll">

            <span>
              SCROLL TO EXPLORE
            </span>

            <div className="scroll-line">
              <span />
            </div>

          </div>


          <div className="hero-year">
            2026
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;
