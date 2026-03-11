import { Metadata } from "next";

type Props = {
  params: Promise<{ ciudad: string; servicio: string }>;
};

// Generación Dinámica de Metadatos Transaccionales
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ciudad, servicio } = await params;
  const ciudadFormat = ciudad.charAt(0).toUpperCase() + ciudad.slice(1);
  const servicioFormat = servicio.replace("-", " ");

  return {
    title: `${servicioFormat.charAt(0).toUpperCase() + servicioFormat.slice(1)} en ${ciudadFormat} | Zarek Saleme`,
    description: `Servicios profesionales de ${servicioFormat} enfocados en resultados y alto rendimiento en ${ciudadFormat}. Zarek Saleme.`,
  };
}

export default async function ServiceLocationPage({ params }: Props) {
  const { ciudad, servicio } = await params;

  // Datos estructurados JSON-LD obligatorios para motores e IA
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Zarek Saleme Dev",
    image: "https://zarek.dev/og-image.png",
    description: `Especialista en ${servicio.replace("-", " ")} en la región de ${ciudad.charAt(0).toUpperCase() + ciudad.slice(1)}.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: ciudad.charAt(0).toUpperCase() + ciudad.slice(1),
      addressCountry: "MX", // Asumiendo default
    },
  };

  return (
    <section className="pt-32 px-4 max-w-4xl flex flex-col items-center text-center mx-auto min-h-[80vh]">
      {/* 3. Sanitización XSS Estricta requerida por Core 30 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <h1 className="text-4xl md:text-6xl font-bold capitalize tracking-tighter text-white">
        {servicio.replace("-", " ")} en{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
          {ciudad}
        </span>
      </h1>
      <p className="mt-8 text-xl text-muted leading-relaxed">
        Contenido optimizado para conversión y SEO local. Soluciones de alto
        rendimiento técnico y diseño para asegurar máxima visibilidad web en tu
        ciudad.
      </p>
    </section>
  );
}
