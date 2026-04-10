export default function Skills() {
  const skills = [
    {
      title: "Programming",
      items: ["Python"]
    },
    {
      title: "Libraries",
      items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"]
    },
    {
      title: "Machine Learning",
      items: ["Supervised Learning", "Unsupervised Learning", "NLP (Basics)"]
    },
    {
      title: "Data Skills",
      items: ["Data Cleaning", "Exploratory Data Analysis (EDA)"]
    },
    {
      title: "Tools",
      items: ["Jupyter Notebook", "VS Code", "Git", "GitHub"]
    },
    {
      title: "Databases",
      items: ["MySQL", "Oracle SQL"]
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Skills</h2>

      <div className="grid">
        {skills.map((skill, index) => (
          <div className="card" key={index}>
            <h3>{skill.title}</h3>

            <div className="skills-list">
              {skill.items.map((item, i) => (
                <span key={i} className="skill-badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}