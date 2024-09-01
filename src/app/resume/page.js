import getConfig from '../../../next.config'
import BackButton from './BackButton'
import ResumeHeader from './ResumeHeader'
import ProfessionalExperience from './ProfessionalExperience'
import Internship from './Internship'
import Education from './Education'
import Skills from './Skills'

const h3Class = 'text-xl xs:text-2xl py-2 md:text-3xl dark:text-white font-semibold mb-2 border-b border-gray-800 dark:border-gray-200 pb-1'
const resumePageContainer = 'max-w-full 2xl:max-w-7xl mx-auto py-14 md:px-5 text-gray-800 dark:text-gray-200'
const BASE_PATH = getConfig.basePath

export default function Resume() {
    return (
        <div id='resume-page' className={resumePageContainer}>
                <BackButton/>
                <ResumeHeader/>
                <ProfessionalExperience/>
                <Internship/>
                <Education/>
                <Skills/>
        </div>
    )
}