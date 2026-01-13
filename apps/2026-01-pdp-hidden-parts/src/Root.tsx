import { Composition } from "@slide-decks/core";
import type React from "react";
import { PDPPresentation } from "./Composition";

export const RemotionRoot: React.FC = () => {
  // 16:9 aspect ratio at 1920x1080
  // 30 fps
  // ~15 minutes = 900 seconds = 27,000 frames
  const fps = 30;
  const durationInSeconds = 900; // 15 minutes
  const durationInFrames = durationInSeconds * fps;

  return (
    <Composition
      id="PDPPresentation"
      component={PDPPresentation}
      durationInFrames={durationInFrames}
      fps={fps}
      width={1920}
      height={1080}
    />
  );
};
