import React from "react";

type ComponentHistory = {
  year: string;
  name: string;
  summary: string;
  demo?: React.ReactNode;
};

const components: ComponentHistory[] = [
  { year: "2018", name: "Button", summary: "Foundational button primitives (primary, secondary, ghost)." },
  { year: "2019", name: "Card", summary: "Composable card layouts for lists and feature promotion." },
  { year: "2020", name: "Modal", summary: "Accessible modal with focus management and keyboard support." },
  { year: "2022", name: "Form", summary: "Validated inputs and form layouts with error messaging." },
];

const ComponentsSection: React.FC<{ id?: string; className?: string }> = ({ id = "components", className = "" }) => {
  return (
    <section id={id} className={`history-section components-section ${className}`} aria-labelledby={`${id}-title`}>
      <header className="history-header">
        <h2 id={`${id}-title`}>Components — timeline of our UI</h2>
        <p className="muted">A curated run of UI primitives and when they were introduced.</p>
      </header>

      <ul className="component-timeline" role="list">
        {components.map((c) => (
          <li className="timeline-item component-item" key={`${c.year}-${c.name}`}>
            <div className="timeline-year">
              <span className="year-large">{c.year}</span>
            </div>

            <div className="timeline-content">
              <h3>{c.name}</h3>
              <p className="muted small">{c.summary}</p>
              <div className="component-preview" aria-hidden>
                <div className="preview-box">{c.name} preview</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ComponentsSection;