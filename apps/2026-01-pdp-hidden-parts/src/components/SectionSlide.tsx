import { interpolate, spring, useCurrentFrame, useVideoConfig } from "@slide-decks/core";
import type React from "react";
import { Slide } from "./Slide";

export interface SectionSlideProps {
  title: string;
}

export const SectionSlide: React.FC<SectionSlideProps> = ({ title }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Cyberpunk colors
  const neonPink = "#ff006e";
  const neonBlue = "#00f5ff";
  const darkBg = "#0a0e27";

  // Animation
  const scale = spring({
    frame: frame - 10,
    fps,
    config: {
      damping: 100,
    },
  });

  const opacity = interpolate(frame, [0, 15], [0, 1]);

  return (
    <Slide background={darkBg}>
      <div
        style={{
          textAlign: "center",
          maxWidth: "1400px",
        }}
      >
        <h1
          style={{
            fontSize: "100px",
            fontWeight: "bold",
            background: `linear-gradient(135deg, ${neonBlue} 0%, ${neonPink} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            margin: 0,
            opacity,
            transform: `scale(${scale})`,
            textShadow: `0 0 30px ${neonBlue}40`,
            letterSpacing: "-1px",
            textTransform: "uppercase",
          }}
        >
          {title}
        </h1>
      </div>
    </Slide>
  );
};
