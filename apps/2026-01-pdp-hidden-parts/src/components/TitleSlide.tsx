import { interpolate, spring, useCurrentFrame, useVideoConfig } from "@slide-decks/core";
import type React from "react";
import { Slide } from "./Slide";

export interface TitleSlideProps {
  title: string;
  subtitle?: string;
}

export const TitleSlide: React.FC<TitleSlideProps> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Cyberpunk colors
  const neonPink = "#ff006e";
  const neonBlue = "#00f5ff";
  const darkBg = "#0a0e27";

  // Animation for title
  const titleOpacity = spring({
    frame: frame - 10,
    fps,
    config: {
      damping: 100,
    },
  });

  const titleTranslateY = interpolate(titleOpacity, [0, 1], [50, 0]);

  // Animation for subtitle
  const subtitleOpacity = spring({
    frame: frame - 30,
    fps,
    config: {
      damping: 100,
    },
  });

  return (
    <Slide background={darkBg}>
      <div
        style={{
          textAlign: "center",
          maxWidth: "1200px",
        }}
      >
        <h1
          style={{
            fontSize: "120px",
            fontWeight: "bold",
            background: `linear-gradient(135deg, ${neonPink} 0%, ${neonBlue} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            margin: 0,
            opacity: titleOpacity,
            transform: `translateY(${titleTranslateY}px)`,
            textShadow: `0 0 20px ${neonPink}40`,
            letterSpacing: "-2px",
          }}
        >
          {title}
        </h1>
        {subtitle !== undefined && (
          <p
            style={{
              fontSize: "48px",
              color: "#8892b0",
              marginTop: "40px",
              opacity: subtitleOpacity,
              fontWeight: 300,
              lineHeight: 1.5,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </Slide>
  );
};
