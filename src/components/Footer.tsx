import { FaGithub } from "react-icons/fa";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        {/* Texto de copyright */}
        <span>
          &copy; {new Date().getFullYear()}, L’ossa bàsquet. Todos los derechos
          reservados.
        </span>

        {/* Desarrollador + Logos */}
        <div className="footer-dev">
          <span>
            Desarrollado por{" "}
            <a
              href="https://quadracode.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="quadra-link"
            >
              QuadraCode
            </a>
          </span>

          <div className="footer-logos">
            <a
              href="https://quadracode.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logo.png"
                alt="Logo QuadraCode"
                className="footer-logo"
              />
            </a>
            <a
              href="https://github.com/GMGonzaloMata"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-github"
            >
              <FaGithub size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
