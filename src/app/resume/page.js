import ResumeHeader from './ResumeHeader'
import ProfessionalExperience from './ProfessionalExperience'
import Internship from './Internship'
import Education from './Education'
import Skills from './Skills'

const resumePageContainer = 'pt-14 text-gray-800 dark:text-gray-200'
const resumeContent =
  'max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl min-[1920px]:max-w-[90rem] mx-auto pt-0 pb-10 sm:pb-12 md:pb-14 space-y-10 sm:space-y-12 md:space-y-14'

export default function Resume() {
  return (
    <div id="resume-page" className={resumePageContainer}>
      <main className={resumeContent}>
        <ResumeHeader />
        <div className="space-y-12 md:space-y-14">
          <ProfessionalExperience />
          <Internship />
          <Education />
          <Skills />
        </div>
      </main>
    </div>
  )
}