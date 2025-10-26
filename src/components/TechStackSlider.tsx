import React from "react";
import reactLogo from "@/assets/react-logo.png";
import nodejsLogo from "@/assets/nodejs-logo.png";
import nextjsLogo from "@/assets/nextjs-logo.png";
import typescriptLogo from "@/assets/typescript-logo.png";
import tailwindLogo from "@/assets/tailwind-logo.png";
import gitLogo from "@/assets/git-logo.png";
import githubLogo from "@/assets/github-logo.png";
import viteLogo from "@/assets/vite-logo.png";

/**
 * A performant, CSS-driven marquee slider for tech logos.
 * - Uses CSS keyframes so the browser can optimize the animation.
 * - Respects prefers-reduced-motion (pauses animation).
 * - Pauses on hover/focus for better accessibility.
 */

const techStack = [
  { name: "React", logo: reactLogo },
  { name: "Node.js", logo: nodejsLogo },
  { name: "Next.js", logo: nextjsLogo },
  { name: "TypeScript", logo: typescriptLogo },
  { name: "Tailwind", logo: tailwindLogo },
  { name: "Git", logo: gitLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "Vite", logo: viteLogo },
];

const TechStackSlider: React.FC = () => {
  // Duplicate the list so the marquee appears continuous
  const repeated = [...techStack, ...techStack];

  return (
    <section aria-label="Technology stack slider" className="py-16">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Technologies we use
        </h3>

        <div
          className="relative overflow-hidden rounded-2xl border border-border/20 bg-card/5"
          // accessibility: pause animation on keyboard focus and hover
          tabIndex={-1}
        >
          <div
            className="marquee will-change-transform flex gap-8 items-center py-6 px-6"
            // allow pause on hover/focus via CSS classes below
          >
            {repeated.map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex flex-col items-center justify-center min-w-[120px] shrink-0"
              >
                <div
                  className="w-20 h-20 flex items-center justify-center rounded-xl bg-white/5 border border-border/10 p-3 transition-transform duration-300 group-hover:scale-105"
                  aria-hidden
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="mt-3 text-sm font-medium text-muted-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline styles for the marquee animation to keep component self-contained.
          Move to global CSS if preferred. */}
      <style jsx>{`
        .marquee {
          animation: marquee 18s linear infinite;
        }
        .marquee:hover,
        .marquee:focus-within {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none;
            transform: none;
          }
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        /* make sure the repeated content is wide enough; the flex container will handle it */
      `}</style>
    </section>
  );
};

export default TechStackSlider;