import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "L’OSSA Bàsquet",
  description:
    "Pàgina oficial de L’ossa bàsquet. Troba informació del club, contacta amb nosaltres i descobreix la nostra indumentària.",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/LogoPestana.png", type: "image/png", sizes: "32x32" },
    ],
  },
  openGraph: {
    title: "L’OSSA Bàsquet",
    description:
      "Pàgina oficial de L’ossa bàsquet. Troba informació del club, contacta amb nosaltres i descobreix la nostra indumentària.",
    images: ["https://lossabasquet.com/LogoPestana.png"],
    url: "https://lossabasquet.com",
    type: "website",
    locale: "ca-ES",
  },
  metadataBase: new URL("https://lossabasquet.com"),
  alternates: {
    canonical: "/",
  },
  other: {
    "google-site-verification": "Y76t4AarKrguz2OtZHY0hQldWm0TOAlcCS96lE5xZ74",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca">
      <head>
        {/* Structured Data: Organización */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "L’ossa bàsquet",
              url: "https://lossabasquet.com",
              logo: "https://lossabasquet.com/LogoPestana.png",
              sameAs: ["https://www.instagram.com/lossabasquet"],
            }),
          }}
        />
        {/* Structured Data: Sitio web */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "L’ossa bàsquet",
              url: "https://lossabasquet.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://lossabasquet.com/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-black`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
