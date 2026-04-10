import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

import "./styles/global.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        
        {/* HEADER */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <p>© 2026 Hrishikesh S Kolli • Built with React</p>
        </footer>

      </div>
    </Router>
  );
}

export default App;