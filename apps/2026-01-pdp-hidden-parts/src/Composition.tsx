import {
  ContentSlide as SharedContentSlide,
  TitleSlide as SharedTitleSlide,
  Slide,
  MotionSteps,
  MotionTransform,
} from "@slide-decks/core";
import type React from "react";
import handlePdpSvg from "./img/handle-pdp.svg";
import getConfigFromGithub from "./img/get-config-from-github.svg";

export const PDPPresentation: React.FC = () => {
  // Cyberpunk colors
  const neonPink = "#ff006e";
  const neonBlue = "#00f5ff";
  const darkBg = "#0a0e27";

  return (
    <>
      {/* Title Slide */}
      <Slide id="title" background={darkBg}>
        <style>
          {`
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
          `}
        </style>
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
                PDP: the hidden parts
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
                PDP: the hidden parts
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
                PDP: the hidden parts
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
            <p
              style={{
                fontSize: "48px",
                color: "#8892b0",
                marginTop: "40px",
                fontWeight: 300,
                lineHeight: 1.5,
              }}
            >
              Understanding the Pipeline that Powers Product Development
            </p>
          }
        />
      </Slide>

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

      {/* Section: BPMN Process */}
      <Slide id="bpmn-section" background={darkBg}>
        <div style={{ textAlign: "center", maxWidth: "1400px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "100px",
              fontWeight: "bold",
              background: `linear-gradient(135deg, ${neonBlue} 0%, ${neonPink} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              margin: 0,
              letterSpacing: "-1px",
              textTransform: "uppercase",
            }}
          >
            PDP BPMN Process
          </h1>
        </div>
      </Slide>

      {/* BPMN Workflow */}
      <Slide id="bpmn-workflow" background={darkBg}>
        <SharedContentSlide
          title={
            <h2
              style={{
                fontSize: "80px",
                fontWeight: "bold",
                background: `linear-gradient(135deg, ${neonPink} 0%, ${neonBlue} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: "0 0 60px 0",
                letterSpacing: "-1px",
              }}
            >
              BPMN Workflow
            </h2>
          }
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Business Process Model and Notation",
              "Orchestrates the entire pipeline",
              "Handles state transitions automatically",
              "Defines approval flows and gates",
              "Connects to external systems",
            ].map((bullet, index) => (
              <li
                key={index}
                style={{
                  fontSize: "48px",
                  color: "#e6f1ff",
                  marginBottom: "40px",
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
            ))}
          </ul>
        </SharedContentSlide>
      </Slide>

      {/* How BPMN Works */}
      <Slide id="bpmn-how" background={darkBg}>
        <SharedContentSlide
          title={
            <h2
              style={{
                fontSize: "80px",
                fontWeight: "bold",
                background: `linear-gradient(135deg, ${neonPink} 0%, ${neonBlue} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: "0 0 60px 0",
                letterSpacing: "-1px",
              }}
            >
              How BPMN Works
            </h2>
          }
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Visual workflow definition",
              "Event-driven architecture",
              "Parallel and sequential flows",
              "Error handling and retries",
              "Audit trail for compliance",
            ].map((bullet, index) => (
              <li
                key={index}
                style={{
                  fontSize: "48px",
                  color: "#e6f1ff",
                  marginBottom: "40px",
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
            ))}
          </ul>
        </SharedContentSlide>
      </Slide>

      {/* Section: PDP Commands */}
      <Slide id="commands-section" background={darkBg}>
        <div style={{ textAlign: "center", maxWidth: "1400px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "100px",
              fontWeight: "bold",
              background: `linear-gradient(135deg, ${neonBlue} 0%, ${neonPink} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              margin: 0,
              letterSpacing: "-1px",
              textTransform: "uppercase",
            }}
          >
            PDP Commands
          </h1>
        </div>
      </Slide>

      {/* Command System */}
      <Slide id="commands-system" background={darkBg}>
        <SharedContentSlide
          title={
            <h2
              style={{
                fontSize: "80px",
                fontWeight: "bold",
                background: `linear-gradient(135deg, ${neonPink} 0%, ${neonBlue} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: "0 0 60px 0",
                letterSpacing: "-1px",
              }}
            >
              Command System
            </h2>
          }
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "CLI and API interfaces",
              "Create, update, query issues",
              "Trigger workflows programmatically",
              "Batch operations support",
              "Integration with CI/CD pipelines",
            ].map((bullet, index) => (
              <li
                key={index}
                style={{
                  fontSize: "48px",
                  color: "#e6f1ff",
                  marginBottom: "40px",
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
            ))}
          </ul>
        </SharedContentSlide>
      </Slide>

      {/* Section: Agentic AI Integration */}
      <Slide id="ai-section" background={darkBg}>
        <div style={{ textAlign: "center", maxWidth: "1400px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "100px",
              fontWeight: "bold",
              background: `linear-gradient(135deg, ${neonBlue} 0%, ${neonPink} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              margin: 0,
              letterSpacing: "-1px",
              textTransform: "uppercase",
            }}
          >
            Agentic AI Integration
          </h1>
        </div>
      </Slide>

      {/* AI-Powered Automation */}
      <Slide id="ai-powered" background={darkBg}>
        <SharedContentSlide
          title={
            <h2
              style={{
                fontSize: "80px",
                fontWeight: "bold",
                background: `linear-gradient(135deg, ${neonPink} 0%, ${neonBlue} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: "0 0 60px 0",
                letterSpacing: "-1px",
              }}
            >
              AI-Powered Automation
            </h2>
          }
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Natural language processing for requirements",
              "Automatic issue categorization",
              "Smart routing based on content",
              "Predictive analytics for timelines",
              "Intelligent recommendations",
            ].map((bullet, index) => (
              <li
                key={index}
                style={{
                  fontSize: "48px",
                  color: "#e6f1ff",
                  marginBottom: "40px",
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
            ))}
          </ul>
        </SharedContentSlide>
      </Slide>

      {/* How AI Enhances PDP */}
      <Slide id="ai-enhances" background={darkBg}>
        <SharedContentSlide
          title={
            <h2
              style={{
                fontSize: "80px",
                fontWeight: "bold",
                background: `linear-gradient(135deg, ${neonPink} 0%, ${neonBlue} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: "0 0 60px 0",
                letterSpacing: "-1px",
              }}
            >
              How AI Enhances PDP
            </h2>
          }
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Reduces manual classification work",
              "Learns from historical patterns",
              "Suggests next steps automatically",
              "Detects anomalies and risks",
              "Improves over time with feedback",
            ].map((bullet, index) => (
              <li
                key={index}
                style={{
                  fontSize: "48px",
                  color: "#e6f1ff",
                  marginBottom: "40px",
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
            ))}
          </ul>
        </SharedContentSlide>
      </Slide>

      {/* Section: Best Practices */}
      <Slide id="practices-section" background={darkBg}>
        <div style={{ textAlign: "center", maxWidth: "1400px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "100px",
              fontWeight: "bold",
              background: `linear-gradient(135deg, ${neonBlue} 0%, ${neonPink} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              margin: 0,
              letterSpacing: "-1px",
              textTransform: "uppercase",
            }}
          >
            Best Practices
          </h1>
        </div>
      </Slide>

      {/* Working with PDP */}
      <Slide id="practices-working" background={darkBg}>
        <SharedContentSlide
          title={
            <h2
              style={{
                fontSize: "80px",
                fontWeight: "bold",
                background: `linear-gradient(135deg, ${neonPink} 0%, ${neonBlue} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: "0 0 60px 0",
                letterSpacing: "-1px",
              }}
            >
              Working with PDP
            </h2>
          }
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Write clear, structured issue descriptions",
              "Use proper labels and metadata",
              "Follow the defined workflow steps",
              "Monitor notifications and updates",
              "Leverage automation where possible",
            ].map((bullet, index) => (
              <li
                key={index}
                style={{
                  fontSize: "48px",
                  color: "#e6f1ff",
                  marginBottom: "40px",
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
            ))}
          </ul>
        </SharedContentSlide>
      </Slide>

      {/* Troubleshooting Tips */}
      <Slide id="practices-troubleshooting" background={darkBg}>
        <SharedContentSlide
          title={
            <h2
              style={{
                fontSize: "80px",
                fontWeight: "bold",
                background: `linear-gradient(135deg, ${neonPink} 0%, ${neonBlue} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: "0 0 60px 0",
                letterSpacing: "-1px",
              }}
            >
              Troubleshooting Tips
            </h2>
          }
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Check BPMN workflow status",
              "Review command execution logs",
              "Verify permissions and access",
              "Use dry-run mode for testing",
              "Contact PDP team for complex issues",
            ].map((bullet, index) => (
              <li
                key={index}
                style={{
                  fontSize: "48px",
                  color: "#e6f1ff",
                  marginBottom: "40px",
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
            ))}
          </ul>
        </SharedContentSlide>
      </Slide>

      {/* Section: Demos */}
      <Slide id="demos-section" background={darkBg}>
        <div style={{ textAlign: "center", maxWidth: "1400px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "100px",
              fontWeight: "bold",
              background: `linear-gradient(135deg, ${neonBlue} 0%, ${neonPink} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              margin: 0,
              letterSpacing: "-1px",
              textTransform: "uppercase",
            }}
          >
            Live Demos
          </h1>
        </div>
      </Slide>

      {/* Demo: Creating an Issue */}
      <Slide id="demos-creating" background={darkBg}>
        <SharedContentSlide
          title={
            <h2
              style={{
                fontSize: "80px",
                fontWeight: "bold",
                background: `linear-gradient(135deg, ${neonPink} 0%, ${neonBlue} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: "0 0 60px 0",
                letterSpacing: "-1px",
              }}
            >
              Demo: Creating an Issue
            </h2>
          }
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Using the CLI to create a new issue",
              "Watch BPMN workflow trigger",
              "See AI classification in action",
              "Track progress through pipeline",
              "View final outcome",
            ].map((bullet, index) => (
              <li
                key={index}
                style={{
                  fontSize: "48px",
                  color: "#e6f1ff",
                  marginBottom: "40px",
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
            ))}
          </ul>
        </SharedContentSlide>
      </Slide>

      {/* Demo: Debugging a Workflow */}
      <Slide id="demos-debugging" background={darkBg}>
        <SharedContentSlide
          title={
            <h2
              style={{
                fontSize: "80px",
                fontWeight: "bold",
                background: `linear-gradient(135deg, ${neonPink} 0%, ${neonBlue} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: "0 0 60px 0",
                letterSpacing: "-1px",
              }}
            >
              Demo: Debugging a Workflow
            </h2>
          }
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Access BPMN workflow dashboard",
              "Trace execution path",
              "Identify bottlenecks",
              "Check integration points",
              "Review error logs",
            ].map((bullet, index) => (
              <li
                key={index}
                style={{
                  fontSize: "48px",
                  color: "#e6f1ff",
                  marginBottom: "40px",
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
            ))}
          </ul>
        </SharedContentSlide>
      </Slide>

      {/* Outro */}
      <Slide id="outro" background={darkBg}>
        <SharedContentSlide
          title={
            <h2
              style={{
                fontSize: "80px",
                fontWeight: "bold",
                background: `linear-gradient(135deg, ${neonPink} 0%, ${neonBlue} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: "0 0 60px 0",
                letterSpacing: "-1px",
              }}
            >
              Thank You!
            </h2>
          }
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["Questions?", "Let's pop the hood together", "PDP team is here to help"].map(
              (bullet, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: "48px",
                    color: "#e6f1ff",
                    marginBottom: "40px",
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
              )
            )}
          </ul>
        </SharedContentSlide>
      </Slide>
    </>
  );
};
