import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ccff00",

          borderRadius: "18%",
          border: "8px solid #ccff00",
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
