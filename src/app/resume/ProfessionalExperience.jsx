'use client'

import FadeInSection from '../components/FadeInSection'

export default function ProfessionalExperience() {
  return (
    <section id="professional-experience-section">
      <h2 id="professional-experience-title" className="resume-section-title">
        Professional Experience
      </h2>
      <div className="space-y-4">
        <FadeInSection className="resume-card resume-details-container">
          <article id="upkeep-details" className="resume-details-container">
            <div id="upkeep-details-title" className="resume-details-header">
              <span className="resume-details-header-title">UpKeep</span>
              <span className="resume-details-header-subtitle">Sep. 2024 – Present</span>
            </div>
            <div id="upkeep-details-subtitle" className="resume-details-header mt-0.5">
              <span className="resume-details-header-subtitle">Sr. QA Engineer (Contract)</span>
              <span className="resume-details-header-subtitle">Los Angeles, CA</span>
            </div>
            <ul id="upkeep-details-list" className="resume-details-list mt-4">
              <li>Lead manual and automated testing across web, mobile, and API applications within Agile teams, ensuring quality for releases, regressions, and exploratory testing.</li>
              <li>Collaborate with developers and product managers to identify, prevent, and resolve bugs in real time, enabling fast feedback loops and rapid iteration.</li>
              <li>Maintain scalable test automation using JavaScript frameworks such as Cypress and Playwright, accelerating regression cycles and increasing test coverage.</li>
              <li>Create and maintain test plans, cases, and documentation in Jira, streamlining test execution and cross-team collaboration.</li>
              <li>Use exploratory testing and data analysis to uncover edge cases and reduce post-release issues.</li>
              <li>Guide teams on test automation strategy, helping establish maintainable frameworks that improved release velocity.</li>
            </ul>
          </article>
        </FadeInSection>
        <FadeInSection className="resume-card resume-details-container">
          <article id="sqasquared-details" className="resume-details-container">
            <div id="sqasquared-details-title" className="resume-details-header">
              <span className="resume-details-header-title">SQA<sup>2</sup></span>
              <span className="resume-details-header-subtitle">Jul. 2021 – Present</span>
            </div>
            <div id="sqasquared-details-subtitle" className="resume-details-header mt-0.5">
              <span className="resume-details-header-subtitle">QA Analyst</span>
              <span className="resume-details-header-subtitle">Los Alamitos, CA</span>
            </div>
            <ul id="sqasquared-details-list" className="resume-details-list mt-4">
              <li>Manage and maintain the integrity of data within various systems, conducting quality assurance checks to ensure accuracy and reliability.</li>
              <li>Facilitate communication between the company and business partners, ensuring efficient information exchange.</li>
              <li>Create and maintain detailed documentation and reports, ensuring transparency and clarity in data processes.</li>
              <li>Collect and integrate feedback from business partners to continually improve QA processes and service quality.</li>
              <li>Contribute to and maintain Playwright automation framework, enhancing testing efficiency.</li>
              <li>Configure and maintain Microsoft Azure pipeline for daily automation, ensuring timely test executions.</li>
              <li>Execute manual and automated test cases, promptly identifying and addressing software issues.</li>
              <li>Lead daily stand-ups, providing insights into testing activities and ensuring team alignment.</li>
            </ul>
          </article>
        </FadeInSection>
        <FadeInSection className="resume-card resume-details-container">
          <article id="altruist-details" className="resume-details-container">
            <div id="altruist-details-title" className="resume-details-header">
              <span className="resume-details-header-title">Altruist</span>
              <span className="resume-details-header-subtitle">Feb. 2022 – Feb. 2024</span>
            </div>
            <div id="altruist-details-subtitle" className="resume-details-header mt-0.5">
              <span className="resume-details-header-subtitle">Software QA Engineer (Contract)</span>
              <span className="resume-details-header-subtitle">Culver City, CA</span>
            </div>
            <ul id="altruits-details-list" className="resume-details-list mt-4">
              <li>Created and implemented detailed test plans early in the SDLC for React-based web applications, resulting in a reduction in post-release defects and ensuring software stability.</li>
              <li>Developed and maintained the test automation framework using Selenium, enhancing test efficiency and coverage.</li>
              <li>Provided technical support and guidance regarding data-related inquiries and troubleshooting.</li>
              <li>Conducted API testing in Postman to guarantee backend system reliability and performance.</li>
              <li>Maintained detailed test documentation using TestRail, fostering a systematic and organized approach.</li>
              <li>Managed defect tracking and reporting using JIRA, reducing average resolution time.</li>
              <li>Identified and communicated risks for upcoming features in collaboration with design and development teams.</li>
              <li>Participated in agile ceremonies, including daily stand-ups, sprint planning, and retrospectives.</li>
              <li>Deployed services to the production environment using Jenkins and GitLab, ensuring smooth releases.</li>
            </ul>
          </article>
        </FadeInSection>
      </div>
    </section>
  )
}