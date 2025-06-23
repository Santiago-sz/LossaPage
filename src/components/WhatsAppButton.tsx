import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppButton.css";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "376669363";
  const message = "Hola! Em contacte des de la pàgina web";
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="whatsapp-container">
      <div className="whatsapp-message">¡Fes-nos la teva consulta!</div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
