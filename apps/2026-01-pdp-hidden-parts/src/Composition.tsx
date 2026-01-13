import { AbsoluteFill, Sequence } from "@slide-decks/core";
import type React from "react";
import { ContentSlide } from "./components/ContentSlide";
import { SectionSlide } from "./components/SectionSlide";
import { TitleSlide } from "./components/TitleSlide";

export const PDPPresentation: React.FC = () => {
  // 30 fps, ~15 minutes = 27,000 frames total
  // Allocate frames per slide type:
  // - Title: 5 seconds = 150 frames
  // - Section: 3 seconds = 90 frames
  // - Content: 30-60 seconds = 900-1800 frames per topic

  const fps = 30;
  const titleDuration = fps * 5; // 5 seconds
  const sectionDuration = fps * 3; // 3 seconds
  const introSlideDuration = fps * 45; // 45 seconds
  const contentSlideDuration = fps * 120; // 2 minutes per main content slide
  const demoSlideDuration = fps * 180; // 3 minutes for demos
  const outroSlideDuration = fps * 30; // 30 seconds

  // Calculate frame positions for each sequence
  const slides = [
    { type: "title", duration: titleDuration },
    { type: "intro", duration: introSlideDuration },
    { type: "bpmn-section", duration: sectionDuration },
    { type: "bpmn-workflow", duration: contentSlideDuration },
    { type: "bpmn-how", duration: contentSlideDuration },
    { type: "commands-section", duration: sectionDuration },
    { type: "commands-system", duration: contentSlideDuration },
    { type: "ai-section", duration: sectionDuration },
    { type: "ai-powered", duration: contentSlideDuration },
    { type: "ai-enhances", duration: contentSlideDuration },
    { type: "practices-section", duration: sectionDuration },
    { type: "practices-working", duration: contentSlideDuration },
    { type: "practices-troubleshooting", duration: contentSlideDuration },
    { type: "demos-section", duration: sectionDuration },
    { type: "demos-creating", duration: demoSlideDuration },
    { type: "demos-debugging", duration: demoSlideDuration },
    { type: "outro", duration: outroSlideDuration },
  ];

  // Calculate cumulative frames
  let framePosition = 0;
  const slidePositions = slides.map((slide) => {
    const start = framePosition;
    framePosition += slide.duration;
    return { ...slide, from: start };
  });

  // Extract individual slide positions for type safety
  const [
    titleSlide,
    introSlide,
    bpmnSectionSlide,
    bpmnWorkflowSlide,
    bpmnHowSlide,
    commandsSectionSlide,
    commandsSystemSlide,
    aiSectionSlide,
    aiPoweredSlide,
    aiEnhancesSlide,
    practicesSectionSlide,
    practicesWorkingSlide,
    practicesTroubleshootingSlide,
    demosSectionSlide,
    demosCreatingSlide,
    demosDebuggingSlide,
    outroSlide,
  ] = slidePositions;

  // Validate all slides are defined (should never fail with current configuration)
  if (
    !titleSlide ||
    !introSlide ||
    !bpmnSectionSlide ||
    !bpmnWorkflowSlide ||
    !bpmnHowSlide ||
    !commandsSectionSlide ||
    !commandsSystemSlide ||
    !aiSectionSlide ||
    !aiPoweredSlide ||
    !aiEnhancesSlide ||
    !practicesSectionSlide ||
    !practicesWorkingSlide ||
    !practicesTroubleshootingSlide ||
    !demosSectionSlide ||
    !demosCreatingSlide ||
    !demosDebuggingSlide ||
    !outroSlide
  ) {
    throw new Error("Missing slide positions");
  }

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0e27" }}>
      {/* Title Slide */}
      <Sequence from={titleSlide.from} durationInFrames={titleSlide.duration}>
        <TitleSlide
          title="PDP: the hidden parts"
          subtitle="Understanding the Pipeline that Powers Product Development"
        />
      </Sequence>

      {/* Introduction */}
      <Sequence from={introSlide.from} durationInFrames={introSlide.duration}>
        <ContentSlide
          title="What is PDP?"
          bullets={[
            "Product Development Pipeline automation",
            "Connects Product Hub issues to systems",
            "Powers the workflow behind the scenes",
            "Most developers see only the surface",
          ]}
        />
      </Sequence>

      {/* Section: BPMN Process */}
      <Sequence from={bpmnSectionSlide.from} durationInFrames={bpmnSectionSlide.duration}>
        <SectionSlide title="PDP BPMN Process" />
      </Sequence>

      <Sequence from={bpmnWorkflowSlide.from} durationInFrames={bpmnWorkflowSlide.duration}>
        <ContentSlide
          title="BPMN Workflow"
          bullets={[
            "Business Process Model and Notation",
            "Orchestrates the entire pipeline",
            "Handles state transitions automatically",
            "Defines approval flows and gates",
            "Connects to external systems",
          ]}
        />
      </Sequence>

      <Sequence from={bpmnHowSlide.from} durationInFrames={bpmnHowSlide.duration}>
        <ContentSlide
          title="How BPMN Works"
          bullets={[
            "Visual workflow definition",
            "Event-driven architecture",
            "Parallel and sequential flows",
            "Error handling and retries",
            "Audit trail for compliance",
          ]}
        />
      </Sequence>

      {/* Section: PDP Commands */}
      <Sequence from={commandsSectionSlide.from} durationInFrames={commandsSectionSlide.duration}>
        <SectionSlide title="PDP Commands" />
      </Sequence>

      <Sequence from={commandsSystemSlide.from} durationInFrames={commandsSystemSlide.duration}>
        <ContentSlide
          title="Command System"
          bullets={[
            "CLI and API interfaces",
            "Create, update, query issues",
            "Trigger workflows programmatically",
            "Batch operations support",
            "Integration with CI/CD pipelines",
          ]}
        />
      </Sequence>

      {/* Section: Agentic AI Integration */}
      <Sequence from={aiSectionSlide.from} durationInFrames={aiSectionSlide.duration}>
        <SectionSlide title="Agentic AI Integration" />
      </Sequence>

      <Sequence from={aiPoweredSlide.from} durationInFrames={aiPoweredSlide.duration}>
        <ContentSlide
          title="AI-Powered Automation"
          bullets={[
            "Natural language processing for requirements",
            "Automatic issue categorization",
            "Smart routing based on content",
            "Predictive analytics for timelines",
            "Intelligent recommendations",
          ]}
        />
      </Sequence>

      <Sequence from={aiEnhancesSlide.from} durationInFrames={aiEnhancesSlide.duration}>
        <ContentSlide
          title="How AI Enhances PDP"
          bullets={[
            "Reduces manual classification work",
            "Learns from historical patterns",
            "Suggests next steps automatically",
            "Detects anomalies and risks",
            "Improves over time with feedback",
          ]}
        />
      </Sequence>

      {/* Section: Best Practices */}
      <Sequence from={practicesSectionSlide.from} durationInFrames={practicesSectionSlide.duration}>
        <SectionSlide title="Best Practices" />
      </Sequence>

      <Sequence from={practicesWorkingSlide.from} durationInFrames={practicesWorkingSlide.duration}>
        <ContentSlide
          title="Working with PDP"
          bullets={[
            "Write clear, structured issue descriptions",
            "Use proper labels and metadata",
            "Follow the defined workflow steps",
            "Monitor notifications and updates",
            "Leverage automation where possible",
          ]}
        />
      </Sequence>

      <Sequence
        from={practicesTroubleshootingSlide.from}
        durationInFrames={practicesTroubleshootingSlide.duration}
      >
        <ContentSlide
          title="Troubleshooting Tips"
          bullets={[
            "Check BPMN workflow status",
            "Review command execution logs",
            "Verify permissions and access",
            "Use dry-run mode for testing",
            "Contact PDP team for complex issues",
          ]}
        />
      </Sequence>

      {/* Section: Demos */}
      <Sequence from={demosSectionSlide.from} durationInFrames={demosSectionSlide.duration}>
        <SectionSlide title="Live Demos" />
      </Sequence>

      <Sequence from={demosCreatingSlide.from} durationInFrames={demosCreatingSlide.duration}>
        <ContentSlide
          title="Demo: Creating an Issue"
          bullets={[
            "Using the CLI to create a new issue",
            "Watch BPMN workflow trigger",
            "See AI classification in action",
            "Track progress through pipeline",
            "View final outcome",
          ]}
        />
      </Sequence>

      <Sequence from={demosDebuggingSlide.from} durationInFrames={demosDebuggingSlide.duration}>
        <ContentSlide
          title="Demo: Debugging a Workflow"
          bullets={[
            "Access BPMN workflow dashboard",
            "Trace execution path",
            "Identify bottlenecks",
            "Check integration points",
            "Review error logs",
          ]}
        />
      </Sequence>

      {/* Outro */}
      <Sequence from={outroSlide.from} durationInFrames={outroSlide.duration}>
        <ContentSlide
          title="Thank You!"
          bullets={["Questions?", "Let's pop the hood together", "PDP team is here to help"]}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
