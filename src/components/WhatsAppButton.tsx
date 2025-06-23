import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppButton.css";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "376665756";
  const message = "Hola! Me contacto desde la página web";
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="whatsapp-container">
      <div className="whatsapp-message">¡Hacenos tu consulta!</div>
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
