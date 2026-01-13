import {
  ContentSlide as SharedContentSlide,
  TitleSlide as SharedTitleSlide,
  Slide,
  MotionSteps,
  MotionTransform,
} from "@slide-decks/core";
import type React from "react";
import handlePdpSvg from "./img/handle-pdp.svg";

export const PDPPresentation: React.FC = () => {
  // Cyberpunk colors
  const neonPink = "#ff006e";
  const neonBlue = "#00f5ff";
  const darkBg = "#0a0e27";

  return (
    <>
      {/* Title Slide */}
      <Slide id="title" background={darkBg}>
        <SharedTitleSlide
          title={
            <h1
              style={{
                fontSize: "120px",
                fontWeight: "bold",
                background: `linear-gradient(135deg, ${neonPink} 0%, ${neonBlue} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: 0,
                letterSpacing: "-2px",
              }}
            >
              PDP: the hidden parts
            </h1>
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
      <Slide id="intro" background={darkBg}>
        <MotionSteps totalSteps={2}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <MotionTransform
              transforms={[
                { scale: 1, x: 0, y: 0 },
                { scale: 2.5, x: 350, y: 0 },
              ]}
              duration={1}
              easing="backOut"
            >
              <img
                src={handlePdpSvg}
                alt="PDP BPMN Process"
                style={{
                  width: "1600px",
                  height: "auto",
                }}
              />
            </MotionTransform>
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
