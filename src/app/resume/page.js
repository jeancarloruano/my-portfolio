import getConfig from '../../../next.config'
import BackButton from '../components/BackButton'

const h1Class = 'text-center'
const h3Class = 'text-xl xs:text-2xl py-2 md:text-3xl dark:text-white font-semibold mb-2 border-b border-gray-800 dark:border-gray-200 pb-1'

const BASE_PATH = getConfig.basePath

export default function Resume() {
    return (
        <section>
            <div className="max-w-full 2xl:max-w-7xl mx-auto py-14 md:px-5 text-gray-800 dark:text-gray-200">
                <BackButton/>
                <h1 className={h1Class}>Jeancarlo Ruano</h1>
                <p className='text-center text-xl xs:text-2xl py-2 md:text-3xl dark:text-white mb-4'>Los Angeles, CA</p>

                <h3 className={h3Class}>Professional Experience</h3>

                <div className="mb-6 text-sm sm:text-base">
                    <div className="flex justify-between">
                        <span className="font-bold">SQA<sup>2</sup></span>
                        <span className="font-bold">Jul. 2021 – Present</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="italic mb-2">QA Analyst</span>
                        <div className="italic mb-2">Los Alamitos, CA</div>
                    </div>
                    <ul className="list-disc list-inside md:ml-4 space-y-2">
                        <li>Manage and maintain the integrity of data within various systems, conducting quality assurance checks to ensure accuracy and reliability.</li>
                        <li>Facilitate communication between the company and business partners, ensuring efficient information exchange.</li>
                        <li>Create and maintain detailed documentation and reports, ensuring transparency and clarity in data processes.</li>
                        <li>Collect and integrate feedback from business partners to continually improve QA processes and service quality.</li>
                        <li>Contribute to and maintain Playwright automation framework, enhancing testing efficiency.</li>
                        <li>Configure and maintain Microsoft Azure pipeline for daily automation, ensuring timely test executions.</li>
                        <li>Execute manual and automated test cases, promptly identifying and addressing software issues.</li>
                        <li>Lead daily stand-ups, providing insights into testing activities and ensuring team alignment.</li>
                    </ul>
                </div>

                <div className="mb-6 text-sm sm:text-base">
                    <div className="flex justify-between">
                        <span className="font-bold">Altruist Financial</span>
                        <span className="font-bold">Feb. 2022 – Feb. 2024</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="italic mb-2">QA Engineer (Contract)</span>
                        <div className="italic mb-2">Culver City, CA</div>
                    </div>
                    <ul className="list-disc list-inside md:ml-4 space-y-2">
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
                </div>

                <h3 className={h3Class}>Internship</h3>

                <div className="mb-6 text-sm sm:text-base">
                    <div className="flex justify-between">
                        <span className="font-bold">JP Morgan Chase & Co. Virtual Experience Program</span>
                        <span className="font-bold">Spring 2021</span>
                    </div>
                    <ul className="list-disc list-inside md:ml-4 space-y-2">
                        <li>Established and configured the development environment by downloading essential Git repositories, files, tools, and dependencies.</li>
                        <li>Debugged and corrected issues in TypeScript files within the given repositories.</li>
                        <li>Enhanced repository test coverage by adding comprehensive unit tests.</li>
                        <li>Created and documented patch files detailing implemented changes.</li>
                    </ul>
                </div>

                <h3 className={h3Class}>Education</h3>

                <div className="mb-6 text-sm sm:text-base">
                    <div className="flex justify-between">
                        <span className="font-bold">California State University, Dominguez Hills</span>
                        <span className="font-bold">May 2021</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="italic mb-2">BS, Computer Science</span>
                        <div className="italic mb-2">Carson, CA</div>
                    </div>
                </div>

                <h3 className={h3Class}>Skills</h3>

                <ul className="text-sm sm:text-base list-disc list-inside md:ml-4 space-y-2">
                    <li><strong>Technologies:</strong> Selenium, Playwright, Java, Python, JavaScript, HTML, CSS, React, Node.js</li>
                    <li><strong>Tools:</strong> JIRA, TestRail, Postman, Jenkins, Git, AWS</li>
                    <li><strong>Platforms:</strong> Windows, MacOS, Linux</li>
                    <li><strong>Methodologies:</strong> Agile, Waterfall, SDLC</li>
                    <li><strong>Other:</strong> SQL Queries, API Testing (POST, PUT, GET, DELETE), Microsoft Suite, Excellent Communication and Problem-Solving Skills</li>
                </ul>
            </div>
        </section>
    )
}