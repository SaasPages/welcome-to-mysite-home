import React from "react";
import reactLogo from "@/assets/react-logo.png";
import nodejsLogo from "@/assets/nodejs-logo.png";
import nextjsLogo from "@/assets/nextjs-logo.png";
import typescriptLogo from "@/assets/typescript-logo.png";
import tailwindLogo from "@/assets/tailwind-logo.png";
import gitLogo from "@/assets/git-logo.png";
import githubLogo from "@/assets/github-logo.png";
import viteLogo from "@/assets/vite-logo.png";

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

const TechCard = ({ tech }: { tech: { name: string; logo: string } }) => (
  <div
    className="flex flex-col items-center justify-center min-w-[140px] group cursor-pointer"
    role="listitem"
    aria-label={tech.name}
  >
    <div className="flex w-20 h-20 rounded-2xl bg-card/40 backdrop-blur-md border border-border/40 flex items-center justify-center mb-4 p-4 transition-transform transform-gpu group-hover:scale-105 group-hover:shadow-glow">
      <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
    </div>
    <span className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
      {tech.name}
    </span>
  </div>
);

const TechStackSlider = () => {
  // We now use a purely CSS-driven marquee and animated background for smooth, modern visuals.
  // The marquee duplicates the content once to achieve a seamless infinite scroll.
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated background layers */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_10%,_rgba(255,210,120,0.10),_transparent_20%),radial-gradient(ellipse_at_90%_90%,_rgba(120,210,255,0.07),_transparent_20%)] animate-bgShift" />
        <div className="absolute -left-24 -top-10 w-72 h-72 rounded-full bg-gradient-to-br from-[#ff8a00] to-[#ff4d6d] opacity-30 blur-3xl animate-blob" />
        <div className="absolute -right-24 -bottom-10 w-96 h-96 rounded-full bg-gradient-to-tr from-[#4dd0e1] to-[#7b61ff] opacity-20 blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-gold bg-clip-text text-transparent">
          Powered By CEO Yasir M.
        </h2>

        <div
          className="marquee rounded-xl p-6"
          role="region"
          aria-label="Tech stack logo slider"
        >
          <div className="marquee-track">
            {/* First copy */}
            <div className="marquee-content flex gap-16 py-2">
              {techStack.map((tech) => (
                <TechCard key={tech.name} tech={tech} />
              ))}
            </div>

            {/* Duplicate copy for seamless loop */}
            <div className="marquee-content flex gap-16 py-2" aria-hidden>
              {techStack.map((tech) => (
                <TechCard key={`${tech.name}-dup`} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Component-scoped styles (keeps everything self-contained) */}
      <style>{`
        /* Disable animations for users who prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
          .animate-bgShift, .animate-blob { animation: none !important; }
        }

        /* Marquee */
        .marquee {
          position: relative;
          overflow: hidden;
          /* subtle glass on the slider itself */
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.03);
          backdrop-filter: blur(6px);
        }

        .marquee-track {
          display: flex;
          width: max-content;
          gap: 0;
          animation: marquee 22s linear infinite;
          align-items: center;
        }

        /* pause on hover/focus for better UX */
        .marquee-track:hover,
        .marquee-track:focus-within {
          animation-play-state: paused;
        }

        .marquee-content {
          display: flex;
          gap: 4rem;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* because we duplicated the content once */
        }

        /* Background movement */
        .animate-bgShift {
          width: 100%;
          height: 100%;
          animation: bgShift 12s ease-in-out infinite alternate;
          mix-blend-mode: overlay;
        }

        @keyframes bgShift {
          0% {
            transform: translate3d(0px, 0px, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate3d(-8%, 6%, 0) scale(1.05);
            opacity: 0.9;
          }
        }

        /* floating blobs */
        .animate-blob {
          animation: blob 8s cubic-bezier(.36,.07,.19,.97) infinite;
          transform-origin: center;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        @keyframes blob {
          0% { transform: translateY(0) scale(1); opacity: 0.32; }
          33% { transform: translateY(-10px) scale(1.05); opacity: 0.28; }
          66% { transform: translateY(6px) scale(0.98); opacity: 0.35; }
          100% { transform: translateY(0) scale(1); opacity: 0.32; }
        }

        /* subtle float for logos to add depth */
        .marquee-content > div .w-20 {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }

        /* shadow-glow utility (used on hover) */
        .shadow-glow {
          box-shadow: 0 10px 30px rgba(123,97,255,0.12), 0 4px 12px rgba(77,208,225,0.06);
        }
      `}</style>
    </section>
  );
};

export default TechStackSlider;