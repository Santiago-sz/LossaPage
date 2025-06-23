import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import "../styles/NavBar.css";
import "../styles/Botones.css";
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const navLinks = [
    {
      label: "Indumentaria",
      href: "#indumentaria",
      classname: "btn btn-indumentaria",
    },
    { label: "Contáctanos", href: "#contacto", classname: "btn btn-contacto" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <img
            src="/logoNav-Photoroom.png"
            alt="Logo"
            className="navbar-logo-img"
          />
        </a>

        <button
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="navbar-links">
          {navLinks.map(({ label, href, classname }) => (
            <li key={label}>
              <a href={href} className={classname}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu"
          >
            <div className="mobile-menu-header">
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                L'OSSA ENCAMP
              </a>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <div className="mobile-menu-links">
              {navLinks.map(({ label, href }) => (
                <a key={label} href={href} onClick={() => setIsMenuOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
