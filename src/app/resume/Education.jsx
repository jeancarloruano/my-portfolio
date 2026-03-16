'use client'

import FadeInSection from '../components/FadeInSection'

export default function Education() {
  return (
    <section id="education-section">
      <h2 id="education-title" className="resume-section-title">
        Education
      </h2>
      <FadeInSection className="resume-card resume-details-container">
      <article id="education-details" className="resume-details-container">
        <div id="education-details-title" className="resume-details-header">
          <span className="resume-details-header-title">CSU, Dominguez Hills</span>
          <span className="resume-details-header-subtitle">May 2021</span>
        </div>
        <div id="education-details-subtitle" className="resume-details-header mt-0.5">
          <span className="resume-details-header-subtitle">BS, Computer Science</span>
          <span className="resume-details-header-subtitle">Carson, CA</span>
        </div>
      </article>
      </FadeInSection>
    </section>
  )
}