import React from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import ThemeSwitcher from "@/components/ThemeSwitcher";

type Column = {
  heading: string;
  features: string[];
  cta?: { label: string; href: string };
};

const ComparisonColumn: React.FC<{ column: Column }> = ({ column }) => (
  <div className="comparison-column" role="listitem">
    <h3>{column.heading}</h3>
    <ul>
      {column.features.map((f, i) => (
        <li key={i}>{f}</li>
      ))}
    </ul>
    {column.cta ? (
      <a className="btn" href={column.cta.href}>
        {column.cta.label}
      </a>
    ) : null}
  </div>
);

const columns: Column[] = [
  {
    heading: "Starter",
    features: ["Basic analytics", "1 project", "Community support"],
    cta: { label: "Get Starter", href: "#starter" },
  },
  {
    heading: "Pro",
    features: ["All Starter features", "Unlimited projects", "Priority support"],
    cta: { label: "Get Pro", href: "#pro" },
  },
  {
    heading: "Enterprise",
    features: ["SLA", "SAML SSO", "Dedicated account manager"],
    cta: { label: "Contact Sales", href: "#enterprise" },
  },
];

const ComparisonSection: React.FC<{ id?: string; className?: string }> = ({ id = "comparison", className = "" }) => {
  return (
    <section id={id} className={`comparison-section ${className}`} aria-labelledby={`${id}-title`}>
      <header>
        <h2 id={`${id}-title`}>Compare Plans</h2>
        <p className="muted">Choose the plan that fits your team and scale with confidence.</p>
      </header>

      <div className="comparison-grid" role="list">
        {columns.map((col) => (
          <ComparisonColumn key={col.heading} column={col} />
        ))}
      </div>
    </section>
  );
};

export default ComparisonSection;