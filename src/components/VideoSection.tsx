import React from "react";

const VideoSection: React.FC<{ id?: string; className?: string; src?: string; poster?: string }> = ({
  id = "video",
  className = "",
  src = "https://www.youtube.com/embed/dQw4w9WgXcQ",
  poster,
}) => {
  return (
    <section id={id} className={`history-section video-section ${className}`} aria-labelledby={`${id}-title`}>
      <header>
        <h2 id={`${id}-title`}>Walkthrough & milestones</h2>
        <p className="muted">A guided tour highlighting product evolution and features by year.</p>
      </header>

      <div className="video-timeline">
        <div className="timeline-year"><span className="year-large">2022</span></div>

        <div className="video-wrapper">
          <iframe
            title="Product walkthrough"
            src={src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            style={{ width: "100%", height: "400px", border: 0 }}
            aria-label="Product video"
          />
        </div>
      </div>

      {poster ? <p className="muted small">Preview image provided</p> : null}
    </section>
  );
};

export default VideoSection;