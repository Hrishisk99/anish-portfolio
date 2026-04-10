export default function Contact() {
  return (
    <section className="section contact-section">
      <h2 className="section-title">Contact</h2>

      <div className="contact-container">
        <p className="contact-text">Let’s collaborate 🚀</p>

        <div className="contact-buttons">
          <a
            href="mailto:anishpatil.1100537@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Email
          </a>

          <a
            href="https://github.com/Anish-1504"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/anish-patil-5350ba250"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}