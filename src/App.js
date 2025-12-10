import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>👋 Hi, I'm Prathyusha</h1>
        <h2>Java Full-Stack Engineer | Exploring AI & ML</h2>
        <p>
          I build scalable backend systems with Java & Spring Boot and modern UIs with React. 
          I&apos;m also upskilling in AI/ML by building practical automation projects.
        </p>
      </header>

      <main>
        <section className="section">
          <h2>Core Skills</h2>
          <ul>
            <li><strong>Backend:</strong> Java, Spring Boot, Microservices, REST APIs</li>
            <li><strong>Frontend:</strong> React.js, JavaScript, HTML/CSS</li>
            <li><strong>Database:</strong> PostgreSQL, MySQL, MongoDB</li>
            <li><strong>DevOps & Tools:</strong> Git, GitHub, Docker, CI/CD</li>
          </ul>
        </section>

        <section className="section">
          <h2>AI/ML Skills (Actively Learning)</h2>
          <ul>
            <li>Python – Pandas, NumPy</li>
            <li>Machine Learning Fundamentals</li>
            <li>NLP & Sentiment Analysis</li>
            <li>Azure/OpenAI Document Intelligence</li>
          </ul>
        </section>

        <section className="section">
          <h2>Projects</h2>

          <div className="project">
            <h3>📄 Resume Analyzer (LLM-based)</h3>
            <p>Extracts skills + generates a job-fit score using LLM APIs.</p>
            <p><strong>Tech:</strong> Python, OpenAI API, Streamlit</p>
          </div>

          <div className="project">
            <h3>🧾 Invoice / Document Extractor</h3>
            <p>Document field extraction using Azure Document Intelligence.</p>
            <p><strong>Tech:</strong> Azure AI, Python</p>
          </div>

          <div className="project">
            <h3>💬 Sentiment Analyzer</h3>
            <p>Classifies reviews using ML & NLP.</p>
            <p><strong>Tech:</strong> Python, Scikit-Learn</p>
          </div>

          <div className="project">
            <h3>💻 Java + React Full-Stack App</h3>
            <p>Spring Boot REST API + modern React UI.</p>
            <p><strong>Tech:</strong> Java, Spring Boot, React, PostgreSQL</p>
          </div>
        </section>

        <section className="section">
          <h2>Contact</h2>
          <p>📧 Email: your-email@example.com</p>
          <p>🔗 LinkedIn: your LinkedIn URL</p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Prathyusha</p>
      </footer>
    </div>
  );
}

export default App;
