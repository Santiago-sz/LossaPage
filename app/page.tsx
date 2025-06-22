"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import { useState, useTransition } from "react"
import { submitContactForm } from "./actions"

export default function HomePage() {
  const [isPending, startTransition] = useTransition()
  const [formStatus, setFormStatus] = useState<{ success: boolean; message: string } | null>(null)
  const [copyStatus, setCopyStatus] = useState<{ type: string; message: string } | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await submitContactForm(formData)
      setFormStatus(result)

      if (result.success) {
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      }
    })
  }

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopyStatus({ type, message: `${type} copiado al portapapeles` })
      setTimeout(() => setCopyStatus(null), 2000)
    } catch (err) {
      setCopyStatus({ type, message: `Error al copiar ${type}` })
      setTimeout(() => setCopyStatus(null), 2000)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Sección 1 - Hero con imagen y botones */}
      <section className="relative h-screen w-full">
        <Image src="/images/hero-logo.jpg" alt="L'OSSA ENCAMP Logo" fill className="object-cover" priority />
        <div className="absolute top-6 right-6 md:right-6 md:top-6 top-4 right-4 left-4 md:left-auto flex gap-4 justify-center md:justify-end">
          <Button
            onClick={() => scrollToSection("contacto")}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-medium"
          >
            Contáctanos
          </Button>
          <Button
            onClick={() => scrollToSection("indumentaria")}
            variant="outline"
            className="bg-white/90 hover:bg-white text-gray-800 border-gray-300 px-6 py-2 rounded-lg font-medium"
          >
            Indumentaria
          </Button>
        </div>
      </section>

      {/* Sección 2 - Indumentaria */}
      <section id="indumentaria" className="bg-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Botón de Instagram centrado */}
          <div className="flex justify-center mb-12">
            <a
              href="https://www.instagram.com/lossabasquet/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="font-semibold">Síguenos en Instagram</span>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Contenedor foto 1 - Indumentaria Casual */}
            <div
              className="rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
              onClick={() => window.open("#", "_blank")} // Reemplazar # con el link que proporcionarás
            >
              <Image
                src="/images/indumentaria-casual.jpg"
                alt="Indumentaria Casual L'OSSA ENCAMP"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Texto descriptivo en el medio */}
            <div className="text-center px-4">
              <h2
                className="text-2xl font-bold text-gray-800 mb-4 cursor-pointer hover:text-pink-500 transition-colors"
                onClick={() => window.open("#", "_blank")} // Reemplazar # con el link que proporcionarás
              >
                Nuestra Indumentaria
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Descubre nuestra colección exclusiva de indumentaria deportiva. Diseños únicos que combinan estilo y
                funcionalidad para que puedas destacar tanto en la cancha como fuera de ella.
              </p>
            </div>

            {/* Contenedor foto 2 - Uniformes de Básquet */}
            <div
              className="rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
              onClick={() => window.open("#", "_blank")} // Reemplazar # con el link que proporcionarás
            >
              <Image
                src="/images/uniformes-basquet.jpg"
                alt="Uniformes de Básquet L'OSSA ENCAMP"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de transición con degradado */}
      <div className="h-32 bg-gradient-to-b from-white to-pink-200"></div>

      {/* Sección 3 - Contacto */}
      <section id="contacto" className="bg-gradient-to-br from-pink-200 to-purple-200 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulario de contacto */}
            <div>
              <h2 className="text-3xl font-bold text-pink-500 mb-8">¡Contáctanos!</h2>
              <form id="contact-form" action={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  type="text"
                  placeholder="Nombre"
                  required
                  className="w-full p-4 rounded-lg border border-gray-300 bg-white"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Correo electrónico"
                  required
                  className="w-full p-4 rounded-lg border border-gray-300 bg-white"
                />
                <Input
                  name="whatsapp"
                  type="tel"
                  placeholder="WhatsApp"
                  className="w-full p-4 rounded-lg border border-gray-300 bg-white"
                />
                <Textarea
                  name="message"
                  placeholder="Déjanos tu mensaje"
                  required
                  rows={6}
                  className="w-full p-4 rounded-lg border border-gray-300 bg-white resize-none"
                />
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-4 rounded-lg font-medium text-lg disabled:opacity-50"
                >
                  {isPending ? "Enviando..." : "Enviar"}
                </Button>
              </form>

              {formStatus && (
                <div
                  className={`mt-4 p-4 rounded-lg ${formStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                >
                  {formStatus.message}
                </div>
              )}
            </div>

            {/* Información de contacto */}
            <div>
              <h2 className="text-3xl font-bold text-pink-500 mb-8">Nuestra sede</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <a
                    href="https://maps.app.goo.gl/hqo5Q3JnNYeSzFtz5?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-purple-500 font-medium hover:text-purple-700 transition-colors cursor-pointer"
                  >
                    Pavelló d'Encamp
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <button
                    onClick={() => copyToClipboard("+376 665 756", "Teléfono")}
                    className="text-xl text-purple-500 font-medium hover:text-purple-700 transition-colors cursor-pointer"
                  >
                    +376 665 756
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <a
                    href="https://wa.me/376665756"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-purple-500 font-medium hover:text-purple-700 transition-colors cursor-pointer"
                  >
                    WhatsApp
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <button
                    onClick={() => copyToClipboard("admin@lossabasquet.com", "Email")}
                    className="text-xl text-purple-500 font-medium hover:text-purple-700 transition-colors cursor-pointer"
                  >
                    admin@lossabasquet.com
                  </button>
                </div>
              </div>

              {/* Mensaje de copiado */}
              {copyStatus && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">{copyStatus.message}</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-600 text-sm">
            © 2025 L'ossa basquet. Desarrollado por{" "}
            <a
              href="https://www.instagram.com/quadracode4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 font-semibold transition-colors"
            >
              QUADRACODE
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
