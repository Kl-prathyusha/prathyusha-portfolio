import React, { useState } from "react";
import "./App.css";
import profilePic from "./assets/profile.jpg"; // make sure this path is correct

const workExperience = [
  {
    role: "Application Engineer",
    summary: [
      "Designed and implemented Spring Boot microservices for transaction authorization, reconciliation, and audit logging.",
      "Improved reliability and latency using resilience patterns and caching approaches.",
      "Optimized SQL queries/indexes for reporting and reconciliation workflows.",
      "Collaborated with QA/DevOps and shipped changes through CI/CD practices.",
    ],
  },
  {
    role: "Software Developer",
    summary: [
      "Built backend services for document processing and automation workflows.",
      "Integrated OCR/Document Intelligence concepts and summarization pipelines.",
      "Developed REST APIs and supported AI-led automation initiatives.",
      "Created UI dashboards to visualize workflow outcomes and metrics.",
    ],
  },
  {
    role: "Software Engineer",
    summary: [
      "Developed Spring Boot services supporting loan origination workflows and integrations.",
      "Implemented secure authentication flows and optimized JPA/Hibernate performance.",
      "Worked across backend + UI modules and improved maintainability through refactoring.",
      "Supported releases and hotfix deployments with team CI/CD processes.",
    ],
  },
  {
    role: "Junior Developer",
    summary: [
      "Developed REST APIs for vendor/payroll workflows using Spring Boot + MySQL.",
      "Improved report performance using optimized SQL queries and indexing.",
      "Built reusable UI components and supported deployments for internal users.",
    ],
  },
];

function WorkExperienceSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="card full-width" id="experience">
      <h2 className="section-title">Work Experience</h2>
      <p className="section-intro">
        A compact view of my roles. Click any row to expand details.
      </p>

      <div className="exp-list">
        {workExperience.map((job, index) => (
          <div key={`${job.company}-${index}`} className="exp-item">
            <button
              className="exp-header"
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              <div className="exp-badge-group">
                <span className="exp-role-pill">{job.role}</span>
              </div>

              <span
                className={
                  "exp-arrow" + (openIndex === index ? " exp-arrow-open" : "")
                }
                aria-hidden="true"
              >
                ▼
              </span>
            </button>

            <div
              className={
                "exp-panel" + (openIndex === index ? " exp-panel-open" : "")
              }
            >
              <ul>
                {job.summary.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  const EMAIL = "prathyusha.lokesh1k@gmail.com";
  const PHONE = "(616) 414-4970";
  const LINKEDIN = "https://www.linkedin.com/in/koduru1p/";

  return (
    <div className="app-root">
      <div className="shell">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="logo-circle">P</div>
          <div className="sidebar-text">
            <div className="sidebar-name">Prathyusha</div>
            <div className="sidebar-role">Java Full-Stack</div>
          </div>
        </aside>

        {/* Main content */}
        <main className="page">
          {/* HERO */}
          <header className="hero">
            <div className="hero-main">
              <div className="hero-top-row">
                {/* LEFT */}
                <div className="hero-text-block">
                  <p className="hero-tagline">Java Full-Stack Engineer</p>
                  <h1 className="hero-title">
                    Building reliable systems with a touch of AI.
                  </h1>
                  <p className="hero-subtitle">
                    I design and build backend services with{" "}
                    <strong>Java &amp; Spring Boot</strong>, connect them to
                    modern <strong>React</strong> frontends, and I&apos;m actively
                    exploring <strong>AI/ML</strong> to make products smarter,
                    not just functional.
                  </p>

                  <div className="hero-badges">
                    <span className="pill pill-primary">
                      Java • Spring Boot • React
                    </span>
                    <span className="pill pill-soft">Exploring AI/ML</span>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="hero-right">
                  <div className="hero-avatar-wrapper">
                    <img
                      src={profilePic}
                      alt="Prathyusha"
                      className="hero-avatar"
                    />
                  </div>

                  <div className="hero-right-actions">
                    <a
                      href="https://github.com/kl-prathyusha"
                      className="icon-badge"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="icon-circle">GH</span>
                      <span className="icon-label">GitHub</span>
                    </a>

                    <a href={`mailto:${EMAIL}`} className="icon-badge">
                      <span className="icon-circle">@</span>
                      <span className="icon-label">Email</span>
                    </a>

                    <a
                      href="/resume.pdf"
                      className="icon-badge"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="icon-circle">⬇</span>
                      <span className="icon-label">Resume</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* BELOW HERO */}
          <section className="main-grid">
            {/* ✅ CORE SKILLS — ONLY 3 CATEGORIES */}
            <section className="card full-width">
              <h2 className="section-title">Core Skills</h2>
              <p className="section-intro">
                The skills I use most often while building full-stack applications.
              </p>

              <div className="skills-grid skills-grid-3col">
                <div>
                  <p className="skill-heading">Backend</p>
                  <ul>
                    <li>Java, Spring Boot, REST APIs</li>
                    <li>Microservices, Spring MVC</li>
                    <li>Spring Security (JWT/OAuth basics)</li>
                    <li>JPA/Hibernate, validations, exception handling</li>
                    <li>Logging &amp; debugging for production issues</li>
                  </ul>
                </div>

                <div>
                  <p className="skill-heading">Frontend</p>
                  <ul>
                    <li>React.js, JavaScript</li>
                    <li>Reusable components, hooks, state management</li>
                    <li>API integration, error handling in UI</li>
                    <li>Responsive UI and clean layouts</li>
                  </ul>
                </div>

                <div>
                  <p className="skill-heading">Data &amp; Storage</p>
                  <ul>
                    <li>PostgreSQL / MySQL — joins, indexes, query tuning</li>
                    <li>Basic MongoDB exposure</li>
                    <li>Schema design basics &amp; data validation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ✅ LEFT HALF — Ways I Work (this is where Git/Agile/CI belongs) */}
            <section className="card">
              <h2 className="section-title">Ways I Work</h2>
              <p className="section-intro">
                Practical development habits I follow on real projects.
              </p>

              <ul className="timeline">
                <li>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3>Git Workflow</h3>
                    <p>Feature branches, clean commits, PRs, and code reviews.</p>
                  </div>
                </li>

                <li>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3>Agile / Scrum</h3>
                    <p>Stand-ups, sprint planning, grooming, and retrospectives.</p>
                  </div>
                </li>

                <li>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3>Build &amp; Delivery</h3>
                    <p>Maven/Gradle + npm, testing basics, and CI/CD exposure.</p>
                  </div>
                </li>

                <li>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3>Production Support</h3>
                    <p>Log analysis, reproducing bugs, safe fixes, regression checks.</p>
                  </div>
                </li>
              </ul>
            </section>

            {/* ✅ RIGHT HALF — AI/ML (keep your old points) */}
            <section className="card">
              <h2 className="section-title">AI/ML — How I'm Expanding My Skills</h2>
              <p className="section-intro">
                I'm deepening my AI/ML capabilities through hands-on projects and formal training,
                focusing on practical applications that complement my full-stack engineering work.
              </p>
              <ul className="timeline">
                <li>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3>Machine Learning Foundations</h3>
                    <p>
                      Regression, classification, clustering, feature engineering, and model evaluation
                      using <strong>Python, Pandas, NumPy, Scikit-learn</strong>.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3>Deep Learning & Neural Networks</h3>
                    <p>
                      Building and training neural networks with <strong>TensorFlow/Keras</strong>,
                      understanding activation functions, loss curves, optimization, and CNN basics.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3>Document Intelligence & Automation</h3>
                    <p>
                      Extracting structured data from resumes, invoices, and receipts using{" "}
                      <strong>Azure Document Intelligence</strong> and <strong>OCR/NLP techniques</strong>.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3>LLM & RAG Systems</h3>
                    <p>
                      Building intelligent microservices using{" "}
                      <strong>Azure OpenAI, embeddings, vector search</strong>,
                      and Retrieval-Augmented Generation (RAG).
                    </p>
                  </div>
                </li>

                <li>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3>AI Backend Integration</h3>
                    <p>
                      Deploying ML/AI inference APIs using <strong>FastAPI, Docker</strong> and connecting them
                      to full-stack applications.
                    </p>
                  </div>
                </li>
              </ul>
              <a
                className="icon-badge ai-notes-btn"
                href="https://github.com/Kl-prathyusha/AI-ML-Learning"
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon-circle">📘</span>
                View Notes
              </a>
            </section>

            {/* ✅ FULL WIDTH */}
            <WorkExperienceSection />

            <section id="projects" className="card full-width">
              <h2 className="section-title">Selected Projects</h2>
              <p className="section-intro">
                A few examples that show how I think about reliability,
                performance and developer experience.
              </p>

              <div className="projects-grid">
                <article className="project-card">
                  <h3>React Hover Audio/Video Player</h3>
                  <p>
                    A lightweight React component that plays audio or text-to-speech
                    on hover using event listeners and custom hooks.
                  </p>
                  <p className="project-tech">
                    React • TypeScript • DOM Events • Custom Hooks
                  </p>
                </article>

                <article className="project-card">
                  <h3>Receipt Processor Microservice</h3>
                  <p>
                    Java Spring Boot microservice that parses receipt data, validates fields,
                    generates structured output, and exposes REST endpoints.
                  </p>
                  <p className="project-tech">
                    Java • Spring Boot • REST APIs • File Parsing • Data Validation
                  </p>
                </article>

                <article className="project-card">
                  <h3>User Management Platform</h3>
                  <p>
                    Full-stack application for user registration, authentication,
                    CRUD operations, and role-based access.
                  </p>
                  <p className="project-tech">
                    Java • Spring Boot • React • PostgreSQL
                  </p>
                </article>

                <article className="project-card">
                  <h3>Hotel Management System</h3>
                  <p>
                    Backend system to manage rooms, bookings, payments, and customer
                    information through modular REST services.
                  </p>
                  <p className="project-tech">
                    Java • Spring Boot • Database Design • REST APIs
                  </p>
                </article>
              </div>
            </section>

            <section id="contact" className="card full-width">
              <h2 className="section-title">Contact</h2>
              <p className="section-intro">
                The easiest way to reach me is by email or via GitHub / LinkedIn.
              </p>

              <div className="contact-grid">
                <div>
                  <p className="contact-label">Email</p>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>

                <div>
                  <p className="contact-label">Phone</p>
                  <a href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}>{PHONE}</a>
                </div>

                <div>
                  <p className="contact-label">GitHub</p>
                  <a
                    href="https://github.com/kl-prathyusha"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/kl-prathyusha
                  </a>
                </div>

                <div>
                  <p className="contact-label">LinkedIn</p>
                  <a href={LINKEDIN} target="_blank" rel="noreferrer">
                    linkedin.com/in/koduru1p
                  </a>
                </div>
              </div>
            </section>
          </section>

          <footer className="footer">
            <span>© {new Date().getFullYear()} Prathyusha • Portfolio</span>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
