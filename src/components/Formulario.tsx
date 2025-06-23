import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { sendContactMessage } from "../services/sendMessage";
import "../styles/Formulario.css";
import "../styles/Botones.css";
import { motion } from "framer-motion";

const Formulario: React.FC = () => {
  const [nombre, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setNumber] = useState("");
  const [mensaje, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await sendContactMessage({ nombre, email, telefono, mensaje });
      alert("Missatge enviat correctament 🚀");
      setName("");
      setEmail("");
      setNumber("");
      setMessage("");
    } catch (error) {
      console.error("Error en l'enviament del formulari:", error);
      alert("Hi va haver un error en enviar el missatge. Torna a intentar.");
    }
  };

  const infoItems = [
    {
      icon: <FaMapMarkerAlt className="icon" />,
      text: "          Pavelló d'Encamp",
      type: "link",
      action: "https://maps.app.goo.gl/hqo5Q3JnNYeSzFtz5?g_st=aw",
    },
    {
      icon: <FaPhoneAlt className="icon" />,
      text: "+376 669363",
      type: "copy",
      action: "+376 669363",
    },
    {
      icon: <FaEnvelope className="icon" />,
      text: "admin@lossabasquet.com",
      type: "copy",
      action: "admin@lossabasquet.com",
    },
  ];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    alert(`${label} copiado al portapapeles`);
  };

  return (
    <section id="contacto">
      <div className="container">
        {/* Sección del Formulario */}
        <div className="form-container">
          <h1 className="titulo">¡Contacta'ns!</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                value={nombre}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nom"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correu electrònic"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                value={telefono}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="WhatsApp"
                required
                pattern="[0-9]+"
                title="Solo se permiten números"
              />
            </div>
            <div className="input-group">
              <textarea
                rows={4}
                value={mensaje}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Deixa'ns el teu missatge"
                required
              />
            </div>
            <button type="submit" className="btn btn-enviar">
              Enviar
            </button>
          </form>
        </div>

        {/* Sección de Información */}
        <div className="info-container">
          <h2 className="info-title">La nostra seu</h2>
          {infoItems.map((item, index) => (
            <motion.div
              className="info-item"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              {item.icon}
              {item.type === "link" ? (
                <a
                  href={item.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-text"
                >
                  {item.text}
                </a>
              ) : (
                <button
                  type="button"
                  className="info-text"
                  style={{ background: "transparent" }}
                  onClick={() => copyToClipboard(item.action, item.text)}
                >
                  {item.text}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formulario;
