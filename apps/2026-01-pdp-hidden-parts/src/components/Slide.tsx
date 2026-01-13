import type React from "react";

export interface SlideProps {
  children: React.ReactNode;
  background?: string;
}

export const Slide: React.FC<SlideProps> = ({ children, background = "#0a0e27" }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: background,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {children}
    </div>
  );
};
