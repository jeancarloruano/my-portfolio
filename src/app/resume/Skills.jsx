'use client'

import FadeInSection from '../components/FadeInSection'

export default function Skills() {
  const groups = [
    { label: 'Technologies', items: ['Selenium', 'Playwright', 'Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'React', 'Node.js'] },
    { label: 'Tools', items: ['JIRA', 'TestRail', 'Postman', 'Jenkins', 'Git', 'AWS'] },
    { label: 'Platforms', items: ['Windows', 'MacOS', 'Linux'] },
    { label: 'Methodologies', items: ['Agile', 'Waterfall', 'SDLC'] },
    { label: 'Other', items: ['SQL Queries', 'API Testing', 'Microsoft Suite', 'Communication & Problem-Solving'] },
  ]

  return (
    <section id="skills-section">
      <h2 id="skills-title" className="resume-section-title">
        Skills
      </h2>
      <FadeInSection id="skills-details-list" className="resume-card">
        <div className="space-y-4 xl:grid xl:grid-cols-2 xl:gap-x-8 xl:gap-y-6 xl:space-y-0">
          {groups.map(({ label, items }) => (
            <div key={label}>
              <p className="text-base font-medium text-teal-600 dark:text-teal-400 mb-2">
                {label}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-lg bg-gray-100 dark:bg-gray-600 px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}