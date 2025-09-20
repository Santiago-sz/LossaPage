import React from "react";
import Link from "next/link";
import "../../styles/Unete.css";
import "../../styles/Botones.css";

export default function UnetePage() {
  return (
    <div className="app">
      <div className="unete-container">
        <div className="unete-content">
          <h1 className="unete-title">¡Únete a L&apos;ossa bàsquet!</h1>
          <p className="unete-subtitle">
            Forma part de la nostra família esportiva
          </p>
          
          <div className="unete-info">
            <div className="info-card">
              <h3>Informació de Contacte</h3>
              <p>Per unir-te al club, contacta&apos;ns:</p>
              <ul>
                <li>📧 Email: admin@lossabasquet.com</li>
                <li>📱 WhatsApp: +376 669363</li>
                <li>📍 Ubicació: Pavelló d'Encamp</li>
              </ul>
            </div>
            
            <div className="info-card">
              <h3>Instruccions</h3>
              <p>Una vegada descarregat el formulari, completar-lo i enviar-lo per correu electrònic a:</p>
              <div style={{ 
                background: 'rgba(59, 130, 246, 0.1)', 
                padding: '1rem', 
                borderRadius: '8px', 
                marginTop: '1rem',
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}>
                <strong style={{ color: '#3b82f6', fontSize: '1.1rem' }}>
                  📧 admin@lossabasquet.com
                </strong>
              </div>
            </div>
          </div>
          
          <div className="unete-cta">
            <a 
              href="/Pagament autorització.pdf" 
              className="btn btn-contacto"
              download="Pagament autorització.pdf"
            >
              Descarga de formulario
            </a>
            <Link href="/" className="btn btn-indumentaria">
              Tornar a l&apos;inici
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
