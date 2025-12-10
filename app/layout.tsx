import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import ScrollFix from "@/components/ScrollFix";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: {
    default: "Zarek Saleme | Creative Developer",
    template: "%s | Zarek Saleme",
  },
  description:
    "Portafolio de desarrollo web Full Stack y Game Dev. Especialista en Unity, C#, Next.js y experiencias inmersivas.",
  keywords: [
    "Desarrollador Web",
    "Game Dev",
    "Unity",
    "Next.js",
    "React",
    "Portfolio",
    "Zarek Saleme",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Zarek Saleme" }],
  creator: "Zarek Saleme",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://zarek.dev",
    siteName: "Zarek Saleme Portfolio",
    title: "Zarek Saleme | Arquitecto Web & Game Dev",
    description:
      "Fusionando ingeniería de software con creatividad interactiva.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zarek Saleme Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zarek Saleme | Creative Developer",
    description: "Portafolio de desarrollo web y videojuegos.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <LanguageProvider>
          {" "}
          <ScrollFix />
          <Background />
          <Navbar />
          <main className="pt-24 px-4 min-h-screen flex flex-col relative z-10">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
