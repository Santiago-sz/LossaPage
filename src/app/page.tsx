"use client";
import React from "react";
import Logo from "../components/Logo";
import Indumentaria from "../components/Indumentaria";
import WhatsAppButton from "@/components/WhatsAppButton";
import Formulario from "../components/Formulario";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      <Logo />
      <Indumentaria />
      <Formulario />
      <WhatsAppButton />
    </div>
  );
}
