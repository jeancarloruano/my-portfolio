import BackButton from './BackButton'
import ResumeHeader from './ResumeHeader'
import ProfessionalExperience from './ProfessionalExperience'
import Internship from './Internship'
import Education from './Education'
import Skills from './Skills'

const resumePageContainer = 'max-w-full 2xl:max-w-7xl mx-auto py-14 md:px-5 text-gray-800 dark:text-gray-200'

export default function Resume() {
    return (
        <div id='resume-page' className={resumePageContainer}>
            <BackButton />
            <ResumeHeader />
            <ProfessionalExperience />
            <Internship />
            <Education />
            <Skills />
        </div>
    )
}