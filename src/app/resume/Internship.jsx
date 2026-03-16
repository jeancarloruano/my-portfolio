'use client'

import FadeInSection from '../components/FadeInSection'

export default function Internship() {
  return (
    <section id="internship-section">
      <h2 id="internship-title" className="resume-section-title">
        Internship
      </h2>
      <FadeInSection className="resume-card resume-details-container">
      <article id="internship-details" className="resume-details-container">
        <div id="internship-details-title" className="resume-details-header">
          <span className="resume-details-header-title">JP Morgan Chase & Co. Virtual Experience Program</span>
          <span className="resume-details-header-subtitle">Spring 2021</span>
        </div>
        <div id="internship-details-subtitle" className="resume-details-header mt-0.5">
          <span className="resume-details-header-subtitle">Program Participant</span>
          <span className="resume-details-header-subtitle">Remote</span>
        </div>
        <ul id="internship-details-list" className="resume-details-list mt-4">
          <li>Established and configured the development environment by downloading essential Git repositories, files, tools, and dependencies.</li>
          <li>Debugged and corrected issues in TypeScript files within the given repositories.</li>
          <li>Enhanced repository test coverage by adding comprehensive unit tests.</li>
          <li>Created and documented patch files detailing implemented changes.</li>
        </ul>
      </article>
      </FadeInSection>
    </section>
  )
}