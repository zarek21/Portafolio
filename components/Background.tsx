export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 h-full w-full bg-background overflow-hidden">
      {/* --- LUCES AMBIENTALES (Todas Moradas) --- */}

      {/* 1. Luz Superior Izquierda (Morada) 
          Nota: Usamos bg-[var(--color-secondary)] para forzar el MORADO
      */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[var(--color-secondary)]/20 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      {/* 2. Luz Central Derecha (Morada) */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[var(--color-secondary)]/15 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />

      {/* 3. Luz Inferior (Morada) */}
      <div className="absolute bottom-0 left-20 w-[600px] h-[600px] bg-[var(--color-secondary)]/20 rounded-full blur-[140px] translate-y-1/3 pointer-events-none" />

      {/* --- GRILLA --- */}
      <div
        className="absolute inset-0 h-full w-full z-10
        bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] 
        bg-[size:40px_40px] 
        [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"
      ></div>
    </div>
  );
}
