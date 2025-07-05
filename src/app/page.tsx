import React from "react";
import Logo from "../components/Logo";
import Indumentaria from "../components/Indumentaria";
import WhatsAppButton from "@/components/WhatsAppButton";
import Formulario from "../components/Formulario";

export default function Home() {
  return (
    <div className="app">
      <Logo />
      <Indumentaria />
      <Formulario />
      <WhatsAppButton />
    </div>
  );
}
