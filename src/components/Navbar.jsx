import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  // load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">
        <Link to="/">Anish Patil</Link>
      </h2>

      <div className="nav-right">
        {/* 🌙 / ☀️ Toggle */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>

      <div className={`menu ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/skills" onClick={() => setOpen(false)}>Skills</Link>
        <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
        <Link to="/experience" onClick={() => setOpen(false)}>Experience</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}