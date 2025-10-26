import React from "react";

type AppCard = {
  title: string;
  description: string;
  platform?: string;
  href?: string;
};

const AppCard: React.FC<{ app: AppCard }> = ({ app }) => (
  <article className="app-card" aria-labelledby={`app-${app.title}`}>
    <h3 id={`app-${app.title}`} className="app-card__title">
      {app.title} {app.platform ? <small className="platform">({app.platform})</small> : null}
    </h3>
    <p className="app-card__description">{app.description}</p>
    {app.href ? (
      <a className="app-card__cta" href={app.href}>
        Learn more
      </a>
    ) : null}
  </article>
);

const sampleApps: AppCard[] = [
  {
    title: "Dashboard",
    description: "A responsive admin dashboard with charts and realtime updates.",
    platform: "Web",
    href: "#dashboard",
  },
  {
    title: "Mobile Companion",
    description: "Lightweight mobile app for on-the-go access to your data.",
    platform: "iOS / Android",
    href: "#mobile",
  },
  {
    title: "Embed Widgets",
    description: "Drop-in widgets to display key metrics on any website.",
    platform: "Web",
    href: "#widgets",
  },
];

const AppSection: React.FC<{ id?: string; className?: string }> = ({ id = "apps", className = "" }) => {
  return (
    <section id={id} className={`app-section ${className}`} aria-labelledby={`${id}-title`}>
      <header>
        <h2 id={`${id}-title`}>Apps & Integrations</h2>
        <p className="muted">Pre-built applications and integrations to get you started quickly.</p>
      </header>

      <div className="app-grid" role="list">
        {sampleApps.map((app) => (
          <AppCard key={app.title} app={app} />
        ))}
      </div>
    </section>
  );
};

export default AppSection;