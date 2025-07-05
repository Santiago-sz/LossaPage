import React from "react";
import "../styles/Logo.css"; // o .module.css si usás CSS Modules

const Logo: React.FC = () => {
  return (
    <section className="hero-background">
      <div className="logo-container">
        <img src="/hero-logo-Photoroom.png" alt="logo" className="logo" />
      </div>
    </section>
  );
};

export default Logo;
