import { ArrowUp } from "lucide-react";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-main">

          <div className="footer-brand">

            <span className="footer-logo">
              AK
            </span>

            <p>
              Developer & Cybersecurity Student
            </p>

          </div>


          <a
            href="#home"
            className="back-top"
          >
            <span>
              BACK TO TOP
            </span>

            <div>
              <ArrowUp
                size={15}
                strokeWidth={1.3}
              />
            </div>
          </a>

        </div>


        <div className="footer-bottom">

          <span>
            © {currentYear} Avinash K.
          </span>

          <span>
            Designed & Built with intention.
          </span>

          <span>
            CHENNAI / INDIA
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
