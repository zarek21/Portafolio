import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/#projects", "/#contact"].map((route) => ({
    url: `https://zarek.dev${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Ejemplos de rutas tipo Core 30 locales
  const core30Routes = [
    { ciudad: "madrid", servicio: "desarrollo-web" },
    { ciudad: "barcelona", servicio: "auditoria-seo" },
    { ciudad: "mexico", servicio: "desarrollo-web" },
    { ciudad: "bogota", servicio: "desarrollo-videojuegos" },
  ].map(({ ciudad, servicio }) => ({
    url: `https://zarek.dev/${ciudad}/${servicio}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...routes, ...core30Routes];
}
