import React from "react";
import Image from "next/image";
import "../styles/Logo.css"; // o .module.css si usás CSS Modules

const Logo: React.FC = () => {
  return (
    <section className="hero-background">
      <div className="logo-container">
        <Image
          src="/hero-logo-Photoroom.png"
          alt="logo"
          width={2000}
          height={1657}
          className="logo"
        />
      </div>
    </section>
  );
};

export default Logo;
