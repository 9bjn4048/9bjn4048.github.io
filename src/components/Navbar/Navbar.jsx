import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

import "./Navbar.css";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Journey", id: "journey" },
  { name: "Projects", id: "projects" },
  { name: "Lab", id: "security-lab" },
  { name: "Contact", id: "contact" }
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">

        <button
          className="navbar-logo"
          onClick={() => scrollToSection("home")}
          aria-label="Go to homepage"
        >
          <span>AVINASH</span>
          <small>CYBER / DEV</small>
        </button>

        <nav className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>
          <div className="navbar-links-inner">

            {navItems.map((item) => (
              <button
                key={item.id}
                className={
                  activeSection === item.id
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}

                {activeSection === item.id && (
                  <span className="active-dot" />
                )}
              </button>
            ))}

          </div>

          <button
            className="nav-contact"
            onClick={() => scrollToSection("contact")}
          >
            Let's Talk
            <ArrowUpRight size={15} strokeWidth={1.5} />
          </button>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={21} strokeWidth={1.5} />
          ) : (
            <Menu size={21} strokeWidth={1.5} />
          )}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
