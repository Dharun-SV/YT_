import React from "react";

export default function Spinner({ size = 36, color = "#F28123" }) {
  const style = {
    width: size,
    height: size,
    border: `${Math.max(2, Math.round(size / 12))}px solid ${color}40`,
    borderTop: `${Math.max(2, Math.round(size / 12))}px solid ${color}`,
    borderRight: `${Math.max(2, Math.round(size / 12))}px solid ${color}80`,
    borderRadius: "50%",
    animation: "nn-spin 1.2s ease-in-out infinite",
    transition: "opacity 0.3s ease-in-out",
  };

  return (
    <>
      <div style={style} aria-hidden="true" />
      <style>{`
        @keyframes nn-spin {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); opacity: 0.8; }
          100% { transform: rotate(360deg); opacity: 1; }
        }
      `}</style>
    </>
  );
}
