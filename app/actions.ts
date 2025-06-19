"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const whatsapp = formData.get("whatsapp") as string
  const message = formData.get("message") as string

  // Aquí puedes integrar con un servicio de email como Resend, SendGrid, etc.
  // Por ahora simularemos el envío

  try {
    // Simular envío de email
    console.log("Enviando email a admin@lossabasquet.com:", {
      name,
      email,
      whatsapp,
      message,
    })

    // Simular delay de envío
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "¡Mensaje enviado correctamente! Te contactaremos pronto.",
    }
  } catch (error) {
    return {
      success: false,
      message: "Error al enviar el mensaje. Por favor, intenta nuevamente.",
    }
  }
}
