import React from "react";

type AppEvent = {
  year: string;
  title: string;
  description: string;
  href?: string;
};

const sampleApps: AppEvent[] = [
  {
    year: "2020",
    title: "Launch — Dashboard",
    description: "Initial public release of the web dashboard with realtime charts and auth.",
    href: "#dashboard",
  },
  {
    year: "2021",
    title: "Mobile Companion",
    description: "Added lightweight mobile app and offline support for critical metrics.",
    href: "#mobile",
  },
  {
    year: "2023",
    title: "Widgets & Plugins",
    description: "Drop-in widgets for embeddable charts and product snapshots.",
    href: "#widgets",
  },
];

const AppSection: React.FC<{ id?: string; className?: string; apps?: AppEvent[] }> = ({
  id = "apps",
  className = "",
  apps = sampleApps,
}) => {
  return (
    <section id={id} className={`history-section app-section ${className}`} aria-labelledby={`${id}-title`}>
      <header className="history-header">
        <h2 id={`${id}-title`}>Apps through time</h2>
        <p className="muted">A timeline of our app releases and notable integrations.</p>
      </header>

      <ol className="timeline" role="list">
        {apps.map((a) => (
          <li key={`${a.year}-${a.title}`} className="timeline-item">
            <div className="timeline-year" aria-hidden>
              <span className="year-large">{a.year}</span>
            </div>

            <div className="timeline-content">
              <h3 className="timeline-title">
                {a.title} {a.href ? <a className="timeline-link" href={a.href}>→</a> : null}
              </h3>
              <p className="timeline-desc">{a.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default AppSection;