export default function Projects() {
  const projects = [
    {
      title: "RAG AI Video Assistant",
      tech: ["Python", "NLP", "LLM", "Whisper"],
      desc: "AI system to analyze video content using transcription and context-aware search."
    },
    {
      title: "Drone Object Detection",
      tech: ["TensorFlow", "OpenCV"],
      desc: "Real-time object detection using COCO dataset models."
    },
    {
      title: "Face Detection (YOLO)",
      tech: ["YOLO", "Raspberry Pi"],
      desc: "Real-time object detection optimized for edge devices."
    },
    {
      title: "Housing Price Analysis",
      tech: ["Pandas", "Matplotlib"],
      desc: "EDA and preprocessing to extract insights from housing data."
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Projects</h2>

      <div className="grid">
        {projects.map((p, index) => (
          <div className="card" key={index}>
            <h3>{p.title}</h3>
            <p className="project-desc">{p.desc}</p>

            <div className="tech-stack">
              {p.tech.map((t, i) => (
                <span key={i} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}