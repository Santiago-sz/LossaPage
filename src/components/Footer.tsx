import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        {/* Texto de copyright */}
        <span>
          &copy; {new Date().getFullYear()}, L’ossa bàsquet. Tots els drets
          reservats.
        </span>

        {/* Desarrollador + Logos */}
        <div className="footer-dev">
          <span>
            Desenvolupat per{" "}
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
              <Image
                src="/logo.png"
                alt="Logo QuadraCode"
                width={150} // Ajustá según tu diseño
                height={50} // Ajustá según tu diseño
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
