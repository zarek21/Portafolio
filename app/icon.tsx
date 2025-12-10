import { ImageResponse } from "next/og";

// Configuración de la imagen (Tamaño estándar de favicon)
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Generación del icono
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ccff00",
          borderRadius: "50%",
          border: "2px solid #ccff00",
          fontWeight: 800,
        }}
      >
        Z
      </div>
    ),
    {
      ...size,
    }
  );
}
