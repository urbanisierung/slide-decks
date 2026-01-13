import { Presentation } from "@slide-decks/core";
import { PDPPresentation } from "./Composition";

export default function App() {
  return (
    <Presentation
      aspectRatio="16:9"
      maxDuration={15}
      keyboard
      touch
      mouse
      routing
      theme={{
        background: "#0a0e27",
        primary: "#ff006e",
        secondary: "#00f5ff",
        foreground: "#e6f1ff",
      }}
    >
      <PDPPresentation />
    </Presentation>
  );
}
