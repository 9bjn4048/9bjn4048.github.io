import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin
} from "lucide-react";

import "./Contact.css";

function Contact() {
  return (
    <section
      id="contact"
      className="contact-section section"
    >
      <div className="container">

        <motion.div
          className="contact-header"
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
            amount: 0.2
          }}
          transition={{
            duration: 0.8
          }}
        >
          <p className="section-label">
            06 / Contact
          </p>

          <h2>
            Let's build
            <br />
            <em>something.</em>
          </h2>

          <p className="contact-intro">
            Have an idea, project or opportunity?
            I'm always interested in building,
            learning and solving interesting problems.
          </p>
        </motion.div>


        <motion.div
          className="contact-main"
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
            amount: 0.15
          }}
          transition={{
            duration: 0.8,
            delay: 0.1
          }}
        >

          <a
            href="mailto:your-email@example.com"
            className="contact-email"
          >
            <span>
              your-email@example.com
            </span>

            <div className="contact-email-arrow">
              <ArrowUpRight
                size={22}
                strokeWidth={1.2}
              />
            </div>
          </a>


          <div className="contact-details">

            <div className="contact-detail">

              <Mail
                size={17}
                strokeWidth={1.2}
              />

              <div>
                <span>
                  EMAIL
                </span>

                <p>
                  your-email@example.com
                </p>
              </div>

            </div>


            <div className="contact-detail">

              <MapPin
                size={17}
                strokeWidth={1.2}
              />

              <div>
                <span>
                  LOCATION
                </span>

                <p>
                  Chennai, India
                </p>
              </div>

            </div>

          </div>

        </motion.div>


        <motion.div
          className="contact-socials"
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
            FIND ME ONLINE
          </span>


          <div className="social-links">

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin
                size={17}
                strokeWidth={1.3}
              />

              <span>
                LinkedIn
              </span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.3}
              />
            </a>


            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <Github
                size={17}
                strokeWidth={1.3}
              />

              <span>
                GitHub
              </span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.3}
              />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;
