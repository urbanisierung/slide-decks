import { interpolate, spring, useCurrentFrame, useVideoConfig } from "@slide-decks/core";
import type React from "react";
import { Slide } from "./Slide";

export interface ContentSlideProps {
  title: string;
  bullets: string[];
}

export const ContentSlide: React.FC<ContentSlideProps> = ({ title, bullets }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Cyberpunk colors
  const neonPink = "#ff006e";
  const neonBlue = "#00f5ff";
  const darkBg = "#0a0e27";
  const textColor = "#e6f1ff";

  // Animation for title
  const titleOpacity = spring({
    frame: frame - 5,
    fps,
    config: {
      damping: 100,
    },
  });

  return (
    <Slide background={darkBg}>
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          textAlign: "left",
        }}
      >
        <h2
          style={{
            fontSize: "80px",
            fontWeight: "bold",
            background: `linear-gradient(135deg, ${neonPink} 0%, ${neonBlue} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            margin: "0 0 60px 0",
            opacity: titleOpacity,
            letterSpacing: "-1px",
          }}
        >
          {title}
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {bullets.map((bullet, index) => {
            const bulletOpacity = spring({
              frame: frame - 20 - index * 15,
              fps,
              config: {
                damping: 100,
              },
            });

            const bulletTranslateX = interpolate(bulletOpacity, [0, 1], [-30, 0]);

            return (
              <li
                key={index}
                style={{
                  fontSize: "48px",
                  color: textColor,
                  marginBottom: "40px",
                  opacity: bulletOpacity,
                  transform: `translateX(${bulletTranslateX}px)`,
                  display: "flex",
                  alignItems: "center",
                  lineHeight: 1.4,
                }}
              >
                <span
                  style={{
                    color: neonPink,
                    marginRight: "30px",
                    fontSize: "32px",
                    fontWeight: "bold",
                  }}
                >
                  ▸
                </span>
                <span>{bullet}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Slide>
  );
};
