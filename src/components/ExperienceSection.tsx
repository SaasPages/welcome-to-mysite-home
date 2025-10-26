import React from "react";

type Experience = {
  year: string;
  name: string;
  role?: string;
  quote: string;
  company?: string;
};

const experiences: Experience[] = [
  {
    year: "2021",
    name: "Alex Johnson",
    role: "CTO",
    company: "Acme Inc.",
    quote: "Integrating this design system helped our teams ship consistent UIs across products.",
  },
  {
    year: "2023",
    name: "Priya Singh",
    role: "Product Manager",
    company: "Nova",
    quote: "Documentation and components reduced onboarding time for new hires.",
  },
];

const Testimonial: React.FC<{ e: Experience }> = ({ e }) => (
  <article className="testimonial timeline-item" aria-labelledby={`quote-${e.name.replace(/\s+/g, "-")}`}>
    <div className="timeline-year">
      <time dateTime={e.year} className="year-large">{e.year}</time>
    </div>

    <div className="timeline-content">
      <blockquote id={`quote-${e.name.replace(/\s+/g, "-")}`} className="quote">
        “{e.quote}”
      </blockquote>
      <footer className="attribution muted">
        <strong>{e.name}</strong>
        {e.role ? <span> — {e.role}</span> : null}
        {e.company ? <span>, {e.company}</span> : null}
      </footer>
    </div>
  </article>
);

const ExperienceSection: React.FC<{ id?: string; className?: string }> = ({ id = "experience", className = "" }) => {
  return (
    <section id={id} className={`history-section experience-section ${className}`} aria-labelledby={`${id}-title`}>
      <header className="history-header">
        <h2 id={`${id}-title`}>Customer experience timeline</h2>
        <p className="muted">Voices from the years — success stories and learnings.</p>
      </header>

      <div className="testimonials-list" role="list">
        {experiences.map((e) => (
          <Testimonial key={`${e.year}-${e.name}`} e={e} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;