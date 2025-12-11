// src/components/RetinaOverlay.tsx
export default function RetinaOverlay() {
  return (
    <div
      // CLASES TAILWIND:
      // - fixed inset-0: Cubre toda la pantalla y se queda fijo.
      // - z-[9990]: Muy alto, por encima del contenido, pero debajo del cursor y el preloader.
      // - pointer-events-none: ¡CRUCIAL! Esto hace que los clicks traspasen esta capa. Si no, no podrías hacer click en nada.
      // - mix-blend-overlay: Ayuda a que la textura se mezcle con los colores de fondo en lugar de solo taparlos.
      className="fixed inset-0 z-[9990] pointer-events-none mix-blend-overlay opacity-70"
      style={{
        // EL TRUCO CSS PARA LA RETÍCULA:
        // Creamos un gradiente radial diminuto (un puntito negro casi transparente de 1px).
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 0)`,
        // Y le decimos que ese patrón se repita cada 4x4 píxeles.
        backgroundSize: "4px 4px",

        // OPCIONAL: Si prefieres líneas horizontales (Scanlines) en lugar de puntos,
        // comenta las 2 líneas de arriba y descomenta esta:
        // backgroundImage: `repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(0,0,0,0.2) 3px)`,
      }}
    >
      {/* Capa extra opcional para dar un tinte de color unificador.
         Usa el color de acento actual con muy baja opacidad.
      */}
      <div className="absolute inset-0 bg-[var(--color-accent)] opacity-[0.03] mix-blend-screen"></div>
    </div>
  );
}
