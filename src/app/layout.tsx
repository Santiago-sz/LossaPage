import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// Si usás componentes globales como Navbar, Footer, etc.
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
    icon: "/LogoPestana.png",
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
  verification: {
    google: "Y76t4AarKrguz2OtZHY0hQldWm0TOAlcCS96lE5xZ74",
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
        {/* Structured Data (Organization) */}
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

        {/* Structured Data (Website) */}
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Componentes globales */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
