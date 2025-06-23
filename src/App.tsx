import React from "react";
import Navbar from "./components/NavBar";
import Logo from "./components/Logo";
import Indumentaria from "./components/Indumentaria";
import Formulario from "./components/Formulario";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Logo />
      <Indumentaria />
      <Formulario />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default App;
