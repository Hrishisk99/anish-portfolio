export default function Experience() {
  return (
    <section className="section">
      <h2 className="section-title">Experience</h2>

      <div className="grid">
        {/* Experience 1 */}
        <div className="card">
          <h3>Indium Software, Bangalore</h3>
          <p className="experience-date">Mar 2025 – Present</p>
          <p className="experience-role">
            Associate Test Engineer (Gaming - iXie)
          </p>

          <ul className="experience-points">
            <li>
              Working as a full-time Associate Test Engineer in the Gaming
              division (iXie), supporting game testing and client deliverables.
            </li>
            <li>
              Captured and validated gameplay footage for upcoming game events
              based on client requirements and quality standards.
            </li>
            <li>
              Managed client requests and defect tracking using Jira, ensuring
              timely updates and accurate documentation.
            </li>
            <li>
              Collaborated with QA teams and project managers to ensure smooth
              project execution and delivery.
            </li>
          </ul>
        </div>

        {/* Experience 2 */}
        <div className="card">
          <h3>Crane’s Varsity, Bangalore</h3>
          <p className="experience-date"></p>
          <p className="experience-role">Data Science Intern</p>

          <ul className="experience-points">
            <li>
              Worked on real-world data handling, analysis, and model training
              using Python.
            </li>
            <li>
              Used NumPy and pandas for data cleaning, preprocessing, and
              manipulation.
            </li>
            <li>
              Applied machine learning techniques to build models and extract
              predictive insights.
            </li>
            <li>
              Gained hands-on experience in AI/ML workflows, dataset
              preparation, and evaluation.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
