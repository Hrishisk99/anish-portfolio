import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation"; // ✅ FIX

import king from "../assets/king.jpg";
import resume from "../assets/Anish_Patil_AIML_resume.pdf";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      {/* Profile Image */}
      <div className="profile-wrapper">
        <img src={king} alt="Anish Patil" className="profile-img" />
      </div>

      {/* Heading */}
      <h1>
        Hi, I'm <span className="gradient-text">Anish Patil</span>{" "}
        <span className="wave">👋</span>
      </h1>

      {/* 🔥 Typing Animation (replaces static role) */}
      <div className="role">
        <TypeAnimation
          sequence={[
            "AI/ML Engineer 🤖",
            1500,
            "Tech Enthusiast 💻",
            1500,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </div>

      {/* Description */}
      <p className="hero-desc">
        Building intelligent systems using AI, machine learning, and real-world
        data.
      </p>

      {/* Buttons */}
      <div className="hero-buttons">
        <button onClick={() => navigate("/projects")} className="btn-primary">
          View Projects
        </button>

        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
