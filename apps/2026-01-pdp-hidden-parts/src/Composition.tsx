import {
  TitleSlide as SharedTitleSlide,
  Slide,
  MotionSteps,
  MotionTransform,
} from "@slide-decks/core";
import { useEffect, useRef, useState } from "react";
import type React from "react";
import mermaid from "mermaid";
import handlePdpSvg from "./img/handle-pdp.svg";
import getConfigFromGithub from "./img/get-config-from-github.svg";
import commentSvg from "./img/comment.svg";
import commentNextPhaseSvg from "./img/comment-next-phase.svg";
import regularPhaseCheckSvg from "./img/regular-phase-check.svg";
import projectFieldsPng from "./img/project-fields.png";
import thanks2Svg from "./img/thanks2.svg";

// Translations for "Thanks!"
const thanksTranslations = [
  "Thanks!",      // English
  "Danke!",       // German
  "¡Gracias!",    // Spanish
  "Merci!",       // French
  "Dziękuję!",    // Polish
  "Grazie!",      // Italian
  "Ευχαριστώ!",   // Greek
  "Obrigado!",    // Brazilian Portuguese
];

const RotatingThanks: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % thanksTranslations.length);
        setIsGlitching(false);
      }, 200);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentText = thanksTranslations[currentIndex];

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        animation: isGlitching ? "glitch-skew 0.2s ease-in-out" : "glitch-skew 4s infinite ease-in-out",
      }}
    >
      {/* Glitch layer - cyan offset */}
      <span
        style={{
          fontSize: "96px",
          fontWeight: "900",
          color: neonBlue,
          position: "absolute",
          left: 0,
          top: 0,
          opacity: 0.8,
          textTransform: "uppercase",
          animation: isGlitching
            ? "glitch-cyan 0.1s linear infinite"
            : "glitch-cyan 2.5s infinite linear, glitch-clip-top 3s infinite ease-in-out",
        }}
        aria-hidden="true"
      >
        {currentText}
      </span>
      {/* Glitch layer - pink offset */}
      <span
        style={{
          fontSize: "96px",
          fontWeight: "900",
          color: neonPink,
          position: "absolute",
          left: 0,
          top: 0,
          opacity: 0.8,
          textTransform: "uppercase",
          animation: isGlitching
            ? "glitch-pink 0.1s linear infinite"
            : "glitch-pink 2s infinite linear, glitch-clip-bottom 2.5s infinite ease-in-out",
        }}
        aria-hidden="true"
      >
        {currentText}
      </span>
      {/* Main text */}
      <span
        style={{
          fontSize: "96px",
          fontWeight: "900",
          color: "#ffffff",
          position: "relative",
          textTransform: "uppercase",
          textShadow: `
            2px 0 ${neonPink}, 
            -2px 0 ${neonBlue},
            0 0 20px rgba(255, 0, 110, 0.5),
            0 0 40px rgba(0, 245, 255, 0.3)
          `,
        }}
      >
        {currentText}
      </span>
    </div>
  );
};

interface MermaidDiagramProps {
  chart: string;
  id: string;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart, id }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | undefined>(undefined);
  const hasRendered = useRef(false);

  useEffect(() => {
    // Prevent double rendering in strict mode
    if (hasRendered.current) return;

    const renderDiagram = async () => {
      if (!containerRef.current) return;

      try {
        // Initialize mermaid for each render to ensure clean state
        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          themeVariables: {
            primaryColor: "#ff006e",
            primaryTextColor: "#ffffff",
            primaryBorderColor: "#00f5ff",
            lineColor: "#00f5ff",
            secondaryColor: "#0a0e27",
            tertiaryColor: "#1a1e3a",
            background: "#0a0e27",
            mainBkg: "#1a1e3a",
            nodeBorder: "#00f5ff",
            clusterBkg: "#1a1e3a",
            clusterBorder: "#ff006e",
            titleColor: "#ffffff",
            edgeLabelBackground: "#0a0e27",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          },
          flowchart: {
            curve: "basis",
            padding: 20,
          },
        });

        // Generate unique ID to avoid conflicts
        const uniqueId = `mermaid-${id}-${Date.now()}`;
        const { svg } = await mermaid.render(uniqueId, chart.trim());
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
          // Scale SVG to fit container
          const svgElement = containerRef.current.querySelector("svg");
          if (svgElement) {
            svgElement.style.maxWidth = "100%";
            svgElement.style.maxHeight = "100%";
            svgElement.style.width = "auto";
            svgElement.style.height = "auto";
          }
        }
        hasRendered.current = true;
      } catch (err) {
        console.error("Mermaid render error:", err);
        setError(err instanceof Error ? err.message : String(err));
      }
    };

    renderDiagram();
  }, [chart, id]);

  if (error) {
    return (
      <div style={{ color: "#ff006e", padding: "20px", fontFamily: "monospace" }}>
        Mermaid Error: {error}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: "40px",
      }}
    />
  );
};

// Cyberpunk colors
const neonPink = "#ff006e";
const neonBlue = "#00f5ff";
const darkBg = "#0a0e27";

// Glitch animation styles (shared across components)
const glitchStyles = `
  @keyframes glitch-cyan {
    0%, 100% { transform: translate(-4px, 2px); opacity: 0.8; }
    10% { transform: translate(-6px, 0px); opacity: 0.9; }
    20% { transform: translate(-2px, 3px); opacity: 0.7; }
    30% { transform: translate(-8px, -1px); opacity: 0.85; }
    40% { transform: translate(-3px, 2px); opacity: 0.75; }
    50% { transform: translate(-5px, 4px); opacity: 0.9; }
    60% { transform: translate(-1px, 1px); opacity: 0.8; }
    70% { transform: translate(-7px, 0px); opacity: 0.85; }
    80% { transform: translate(-4px, 3px); opacity: 0.7; }
    90% { transform: translate(-2px, 1px); opacity: 0.9; }
  }
  @keyframes glitch-pink {
    0%, 100% { transform: translate(4px, -2px); opacity: 0.8; }
    10% { transform: translate(2px, -4px); opacity: 0.7; }
    20% { transform: translate(6px, 0px); opacity: 0.85; }
    30% { transform: translate(3px, -3px); opacity: 0.9; }
    40% { transform: translate(7px, -1px); opacity: 0.75; }
    50% { transform: translate(1px, -2px); opacity: 0.8; }
    60% { transform: translate(5px, -5px); opacity: 0.9; }
    70% { transform: translate(2px, 0px); opacity: 0.7; }
    80% { transform: translate(8px, -2px); opacity: 0.85; }
    90% { transform: translate(4px, -4px); opacity: 0.8; }
  }
  @keyframes glitch-clip-top {
    0%, 100% { clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%); }
    25% { clip-path: polygon(0 5%, 100% 0, 100% 40%, 0 50%); }
    50% { clip-path: polygon(0 0, 100% 10%, 100% 50%, 0 40%); }
    75% { clip-path: polygon(0 8%, 100% 0, 100% 42%, 0 48%); }
  }
  @keyframes glitch-clip-bottom {
    0%, 100% { clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%); }
    25% { clip-path: polygon(0 50%, 100% 60%, 100% 100%, 0 95%); }
    50% { clip-path: polygon(0 60%, 100% 52%, 100% 95%, 0 100%); }
    75% { clip-path: polygon(0 52%, 100% 58%, 100% 100%, 0 98%); }
  }
  @keyframes glitch-skew {
    0%, 100% { transform: skewX(0deg); }
    20% { transform: skewX(-1deg); }
    40% { transform: skewX(1deg); }
    60% { transform: skewX(-0.5deg); }
    80% { transform: skewX(0.5deg); }
  }
`;

interface GlitchTitleSlideProps {
  id: string;
  title: string;
  subtitle?: string;
}

const GlitchTitleSlide: React.FC<GlitchTitleSlideProps> = ({ id, title, subtitle }) => {
  return (
    <Slide id={id} background={darkBg}>
      <style>{glitchStyles}</style>
      <SharedTitleSlide
        title={
          <div
            style={{
              position: "relative",
              display: "inline-block",
              animation: "glitch-skew 4s infinite ease-in-out",
            }}
          >
            {/* Glitch layer - cyan offset */}
            {/** biome-ignore lint/a11y/useHeadingContent: <explanation> */}
            <h1
              style={{
                fontSize: "120px",
                fontWeight: "900",
                color: neonBlue,
                margin: 0,
                letterSpacing: "-2px",
                position: "absolute",
                left: 0,
                top: 0,
                opacity: 0.8,
                textTransform: "uppercase",
                animation: "glitch-cyan 2.5s infinite linear, glitch-clip-top 3s infinite ease-in-out",
              }}
              aria-hidden="true"
            >
              {title}
            </h1>
            {/* Glitch layer - pink offset */}
            {/** biome-ignore lint/a11y/useHeadingContent: <explanation> */}
            <h1
              style={{
                fontSize: "120px",
                fontWeight: "900",
                color: neonPink,
                margin: 0,
                letterSpacing: "-2px",
                position: "absolute",
                left: 0,
                top: 0,
                opacity: 0.8,
                textTransform: "uppercase",
                animation: "glitch-pink 2s infinite linear, glitch-clip-bottom 2.5s infinite ease-in-out",
              }}
              aria-hidden="true"
            >
              {title}
            </h1>
            {/* Main title */}
            <h1
              style={{
                fontSize: "120px",
                fontWeight: "900",
                color: "#ffffff",
                margin: 0,
                letterSpacing: "-2px",
                position: "relative",
                textTransform: "uppercase",
                textShadow: `
                  2px 0 ${neonPink}, 
                  -2px 0 ${neonBlue},
                  0 0 20px rgba(255, 0, 110, 0.5),
                  0 0 40px rgba(0, 245, 255, 0.3)
                `,
              }}
            >
              {title}
            </h1>
            {/* Scan line overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.1) 2px, rgba(0, 0, 0, 0.1) 4px)",
                pointerEvents: "none",
              }}
            />
          </div>
        }
        subtitle={
          subtitle ? (
            <p
              style={{
                fontSize: "48px",
                color: "#8892b0",
                marginTop: "40px",
                fontWeight: 300,
                lineHeight: 1.5,
              }}
            >
              {subtitle}
            </p>
          ) : undefined
        }
      />
    </Slide>
  );
};

export const PDPPresentation: React.FC = () => {
  return (
    <>
      {/* Title Slide */}
      <GlitchTitleSlide
        id="title"
        title="PDP: the hidden parts"
        subtitle="Understanding the Pipeline that Powers Product Development"
      />

      {/* Introduction */}
      <Slide id="intro" background="#ffffff">
        <MotionSteps totalSteps={8}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <MotionTransform
              transforms={[
                { scale: 1, x: 0, y: 0, opacity: 1 },
                { scale: 2.5, x: 1100, y: 300, opacity: 1 },
                { scale: 2.5, x: 1100, y: 300, opacity: 0 },
                { scale: 2.5, x: 1100, y: 300, opacity: 0 },
                { scale: 2.5, x: 1100, y: 300, opacity: 0 },
                { scale: 2.5, x: 700, y: 300, opacity: 1 },
                { scale: 2, x: -500, y: 100, opacity: 1 },
                { scale: 1, x: 0, y: 0, opacity: 1 },
              ]}
              duration={1}
              easing="backOut"
            >
              <img
                src={handlePdpSvg}
                alt="PDP BPMN Process"
                style={{
                  width: "1600px",
                  height: "1000px",
                }}
              />
            </MotionTransform>
            {/* Detail BPMN */}
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "40%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <MotionTransform
                transforms={[
                  { scale: 0, x: 0, y: 0, opacity: 0 },
                  { scale: 0, x: 0, y: 0, opacity: 0 },
                  { scale: 1.5, x: 0, y: 0, opacity: 1 },
                  { scale: 1.5, x: 0, y: 0, opacity: 0 },
                  { scale: 1.5, x: 0, y: 0, opacity: 1 },
                  { scale: 1.5, x: 0, y: 0, opacity: 0 },
                ]}
                duration={1}
                easing="backOut"
              >
                <img
                  src={getConfigFromGithub}
                  alt="PDP BPMN Process Detail"
                  style={{
                    width: "1600px",
                    height: "1000px",
                  }}
                />
              </MotionTransform>
            </div>
            {/* Commands and FEEL Expression Boxes */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                gap: "40px",
              }}
            >
              <MotionTransform
                transforms={[
                  { scale: 0, x: 0, y: 0, opacity: 0 },
                  { scale: 0, x: 0, y: 0, opacity: 0 },
                  { scale: 0, x: 0, y: 0, opacity: 0 },
                  { scale: 1, x: 0, y: 0, opacity: 1 },
                  { scale: 1, x: 0, y: 0, opacity: 0 },
                  { scale: 0, x: 0, y: 0, opacity: 0 },
                ]}
                duration={1}
                easing="backOut"
              >
                <div style={{ display: "flex", gap: "40px" }}>
                  {/* Left Box - Commands */}
                  <div
                    style={{
                      background: "#1e1e1e",
                      borderRadius: "12px",
                      padding: "40px",
                      fontFamily: "monospace",
                      fontSize: "24px",
                      lineHeight: 1.8,
                      color: "#9cdcfe",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    }}
                  >
                    <pre style={{ margin: 0 }}>
                      {`COMMAND_NEXT_PHASE=!pdp next
COMMAND_DESIGN_LINK=!pdp design
COMMAND_MIGRATE=!pdp migrate
COMMAND_SLACK=!pdp slack
COMMAND_PROGRESS=!pdp progress
COMMAND_PAUSE=!pdp pause
COMMAND_CONTINUE=!pdp continue
COMMAND_RESTART=!pdp restart-check
COMMAND_AI_REVIEW=!pdp review
COMMAND_PREFIX=!pdp
...`}
                    </pre>
                  </div>

                  {/* Right Box - FEEL Expression */}
                  <div
                    style={{
                      background: "#1e1e1e",
                      borderRadius: "12px",
                      padding: "40px",
                      fontFamily: "monospace",
                      fontSize: "24px",
                      lineHeight: 1.8,
                      color: "#ce9178",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    }}
                  >
                    <pre style={{ margin: 0 }}>
                      {`context merge(
  for entry in
    (for kvPair in
      (for kvPair in split(rawContent, "\\n") return kvPair)
    return split(kvPair, "="))
  return
    context put({}, entry[1], entry[2])
)`}
                    </pre>
                  </div>
                </div>
              </MotionTransform>
            </div>
          </div>
        </MotionSteps>
      </Slide>

      {/* New Comment Section Title */}
      <GlitchTitleSlide id="new-comment-title" title="New Comment" />

      {/* Comment Diagram Slide */}
      <Slide id="comment-diagram" background="#ffffff">
        <MotionSteps totalSteps={4}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <MotionTransform
              transforms={[
                { scale: 1, x: 0, y: 0, opacity: 1 },
                { scale: 2.5, x: 0, y: 800, opacity: 1 },
                { scale: 2.5, x: 0, y: 0, opacity: 1 },
                { scale: 2.5, x: 0, y: -800, opacity: 1 },
              ]}
              duration={1}
              easing="backOut"
            >
              <img
                src={commentSvg}
                alt="Comment BPMN Process"
                style={{
                  width: "1600px",
                  height: "1000px",
                }}
              />
            </MotionTransform>
          </div>
        </MotionSteps>
      </Slide>

      {/* Next Phase Section Title */}
      <GlitchTitleSlide id="next-phase-title" title="Next Phase" />

      {/* Next Phase Diagram Slide */}
      <Slide id="next-phase-diagram" background="#ffffff">
        <MotionSteps totalSteps={6}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <MotionTransform
              transforms={[
                { scale: 1, x: 0, y: 0, opacity: 1 },
                { scale: 2.5, x: 1200, y: 0, opacity: 1 },
                { scale: 2.5, x: 200, y: 300, opacity: 1 },
                { scale: 2.5, x: -1000, y: 300, opacity: 1 },
                { scale: 2.5, x: 200, y: -300, opacity: 1 },
                { scale: 2.5, x: -1000, y: -300, opacity: 1 },
              ]}
              duration={1}
              easing="backOut"
            >
              <img
                src={commentNextPhaseSvg}
                alt="Next Phase BPMN Process"
                style={{
                  width: "1600px",
                  height: "1000px",
                }}
              />
            </MotionTransform>
          </div>
        </MotionSteps>
      </Slide>

      {/* Housekeeping Section Title */}
      <GlitchTitleSlide id="housekeeping-title" title="Housekeeping" />

      {/* Housekeeping Diagram Slide */}
      <Slide id="housekeeping-diagram" background="#ffffff">
        <MotionSteps totalSteps={6}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <MotionTransform
              transforms={[
                { scale: 1, x: 0, y: 0, opacity: 1 },
                { scale: 2.5, x: 1000, y: -800, opacity: 1 },
                { scale: 2.5, x: -900, y: -800, opacity: 1 },
                { scale: 2.5, x: -900, y: 0, opacity: 1 },
                { scale: 2.5, x: -900, y: 400, opacity: 1 },
                { scale: 2.5, x: -900, y: 800, opacity: 1 },
              ]}
              duration={1}
              easing="backOut"
            >
              <img
                src={regularPhaseCheckSvg}
                alt="Housekeeping BPMN Process"
                style={{
                  width: "1600px",
                  height: "1000px",
                }}
              />
            </MotionTransform>
          </div>
        </MotionSteps>
      </Slide>

      {/* Github Issue Centric Section Title */}
      <GlitchTitleSlide
        id="github-issue-title"
        title="Github Issue centric"
        subtitle="Single source of truth"
      />

      {/* Github Issue Mermaid Diagram Slide */}
      <Slide id="github-issue-diagram" background={darkBg}>
        <MermaidDiagram
          id="github-issue-flow"
          chart={`
flowchart LR
    subgraph COL1[" "]
        direction TB
        subgraph SLACK["Slack"]
            A["!pdp command"]
        end
        subgraph GITHUB["Github"]
            B["!pdp command"]
            C["Project change"]
        end
    end
    
    subgraph COL2[" "]
        subgraph C8["C8 Process"]
            D["Inbound Connector \n(Github webhook)"]
        end
    end
    
    A --> B
    B --> D
    C --> D
          `}
        />
      </Slide>

      {/* Commands Slide with zoom effect */}
      <Slide id="commands-overview" background={darkBg}>
        <MotionSteps totalSteps={4}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <MotionTransform
              transforms={[
                { scale: 1, x: 0, y: 0, opacity: 1 },
                { scale: 1.8, x: 750, y: -400, opacity: 1 },
                { scale: 1.8, x: 750, y: 350, opacity: 1 },
                { scale: 1.4, x: -650, y: 130, opacity: 1 },
              ]}
              duration={1}
              easing="backOut"
            >
              <div
                style={{
                  display: "flex",
                  gap: "60px",
                  padding: "60px",
                }}
              >
                {/* Left Column */}
                <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
                  {/* Group 1: Slack and Github Commands */}
                  <div
                    style={{
                      background: "#1a1e3a",
                      borderRadius: "16px",
                      padding: "50px",
                      border: `3px solid ${neonBlue}`,
                      boxShadow: `0 0 30px rgba(0, 245, 255, 0.3)`,
                    }}
                  >
                    <h3
                      style={{
                        color: neonBlue,
                        fontSize: "42px",
                        marginBottom: "30px",
                        fontWeight: "bold",
                      }}
                    >
                      Slack & Github Commands
                    </h3>
                    <div style={{ fontFamily: "monospace", fontSize: "28px", lineHeight: 2.2, color: "#ffffff" }}>
                      <div><span style={{ color: neonPink }}>!pdp next</span> - Switch to next phase</div>
                      <div><span style={{ color: neonPink }}>!pdp design</span> &lt;link&gt; - Update design link</div>
                      <div><span style={{ color: neonPink }}>!pdp review</span> - AI feedback on Epic</div>
                    </div>
                  </div>

                  {/* Group 2: Slack only Commands */}
                  <div
                    style={{
                      background: "#1a1e3a",
                      borderRadius: "16px",
                      padding: "50px",
                      border: `3px solid ${neonPink}`,
                      boxShadow: `0 0 30px rgba(255, 0, 110, 0.3)`,
                    }}
                  >
                    <h3
                      style={{
                        color: neonPink,
                        fontSize: "42px",
                        marginBottom: "30px",
                        fontWeight: "bold",
                      }}
                    >
                      Slack Only Commands
                    </h3>
                    <div style={{ fontFamily: "monospace", fontSize: "28px", lineHeight: 2.2, color: "#ffffff" }}>
                      <div><span style={{ color: neonBlue }}>!pdp decision</span> &lt;text&gt; - Add decision comment</div>
                      <div><span style={{ color: neonBlue }}>!pdp comment</span> &lt;text&gt; - Add regular comment</div>
                      <div><span style={{ color: neonBlue }}>!pdp progress</span> &lt;1-5&gt; &lt;text&gt; - Add progress</div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
                  {/* Group 3: Github only Commands */}
                  <div
                    style={{
                      background: "#1a1e3a",
                      borderRadius: "16px",
                      padding: "50px",
                      border: `3px solid ${neonBlue}`,
                      boxShadow: `0 0 30px rgba(0, 245, 255, 0.3)`,
                      minWidth: "700px",
                    }}
                  >
                    <h3
                      style={{
                        color: neonBlue,
                        fontSize: "42px",
                        marginBottom: "30px",
                        fontWeight: "bold",
                      }}
                    >
                      Github Only Commands
                    </h3>
                    <div style={{ fontFamily: "monospace", fontSize: "28px", lineHeight: 2.2, color: "#ffffff" }}>
                      <div><span style={{ color: neonPink }}>/riskAssessment</span> - Trigger risk assessment</div>
                      <div><span style={{ color: neonPink }}>!pdp slack</span> - Join project channel</div>
                      <div><span style={{ color: neonPink }}>!pdp slack</span> @handle - Invite to channel</div>
                      <div><span style={{ color: neonPink }}>!pdp migrate</span> channelId=... - Migrate epic</div>
                      <div><span style={{ color: neonPink }}>!pdp pause</span> - Pause reminders</div>
                      <div><span style={{ color: neonPink }}>!pdp continue</span> - Resume reminders</div>
                      <div><span style={{ color: neonPink }}>!pdp restart-check</span> - Restart house keeping</div>
                    </div>
                  </div>
                </div>
              </div>
            </MotionTransform>
          </div>
        </MotionSteps>
      </Slide>

      {/* Project Fields Slide */}
      <Slide id="project-fields" background="#0D1117">
        <MotionSteps totalSteps={4}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <MotionTransform
              transforms={[
                { scale: 1, x: 0, y: 0, opacity: 1 },
                { scale: 2.5, x: 0, y: 700, opacity: 1 },
                { scale: 2.5, x: 0, y: -300, opacity: 1 },
                { scale: 2.5, x: 0, y: -700, opacity: 1 },
              ]}
              duration={1}
              easing="backOut"
            >
              <img
                src={projectFieldsPng}
                alt="Project Fields"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  boxShadow: "0 0 60px 20px rgba(180, 130, 255, 0.5), 0 0 120px 40px rgba(180, 130, 255, 0.3)",
                  borderRadius: "8px",
                }}
              />
            </MotionTransform>
          </div>
        </MotionSteps>
      </Slide>

      {/* Links and References Slide */}
      <Slide id="links-references" background={darkBg}>
        <style>{glitchStyles}</style>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            gap: "50px",
          }}
        >
          {[
            "https://camunda.directory/pdp",
            "https://camunda.directory/pdp-texts",
            "#pdp-requests",
            "#pdp-logs",
            "#prj-pdp-2564-test",
          ].map((text, index) => {
            const isUrl = text.startsWith("http");
            const content = (
              <div
                key={text}
                style={{
                  position: "relative",
                  display: "inline-block",
                  animation: "glitch-skew 4s infinite ease-in-out",
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Glitch layer - cyan offset */}
                <span
                  style={{
                    fontSize: "64px",
                    fontWeight: "700",
                    color: neonBlue,
                    position: "absolute",
                    left: 0,
                    top: 0,
                    opacity: 0.8,
                    animation: "glitch-cyan 2.5s infinite linear, glitch-clip-top 3s infinite ease-in-out",
                    animationDelay: `${index * 0.15}s`,
                  }}
                  aria-hidden="true"
                >
                  {text}
                </span>
                {/* Glitch layer - pink offset */}
                <span
                  style={{
                    fontSize: "64px",
                    fontWeight: "700",
                    color: neonPink,
                    position: "absolute",
                    left: 0,
                    top: 0,
                    opacity: 0.8,
                    animation: "glitch-pink 2s infinite linear, glitch-clip-bottom 2.5s infinite ease-in-out",
                    animationDelay: `${index * 0.1}s`,
                  }}
                  aria-hidden="true"
                >
                  {text}
                </span>
                {/* Main text */}
                <span
                  style={{
                    fontSize: "64px",
                    fontWeight: "700",
                    color: "#ffffff",
                    position: "relative",
                    textShadow: `
                      2px 0 ${neonPink}, 
                      -2px 0 ${neonBlue},
                      0 0 20px rgba(255, 0, 110, 0.5),
                      0 0 40px rgba(0, 245, 255, 0.3)
                    `,
                  }}
                >
                  {text}
                </span>
              </div>
            );

            return isUrl ? (
              <a
                key={text}
                href={text}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                {content}
              </a>
            ) : (
              content
            );
          })}
        </div>
      </Slide>

      {/* Final Thank You Slide */}
      <Slide id="thanks" background={darkBg}>
        <style>
          {`
            ${glitchStyles}
            @keyframes purple-glow {
              0%, 100% {
                filter: drop-shadow(0 0 20px rgba(180, 130, 255, 0.6)) drop-shadow(0 0 40px rgba(180, 130, 255, 0.4)) drop-shadow(0 0 60px rgba(180, 130, 255, 0.2));
              }
              50% {
                filter: drop-shadow(0 0 30px rgba(180, 130, 255, 0.8)) drop-shadow(0 0 60px rgba(180, 130, 255, 0.5)) drop-shadow(0 0 90px rgba(180, 130, 255, 0.3));
              }
            }
          `}
        </style>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            gap: "60px",
          }}
        >
          <img
            src={thanks2Svg}
            alt="Thanks"
            style={{
              width: "1500px",
              height: "auto",
              animation: "purple-glow 3s ease-in-out infinite",
            }}
          />
          <RotatingThanks />
        </div>
      </Slide>
    </>
  );
};
