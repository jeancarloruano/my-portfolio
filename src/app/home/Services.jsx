'use client'

import getConfig from '../../../next.config'
import Link from 'next/link'
import FadeInSection from '../components/FadeInSection'
import LoadingImage from '../components/LoadingImage'

const aboutLayoutClass =
  'mt-12 md:mt-16 flex flex-col lg:flex-row items-center lg:items-center gap-8 md:gap-16'
const authorImageContainer =
  'relative shrink-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full w-44 h-44 xs:w-52 xs:h-52 sm:w-64 sm:h-64 overflow-hidden border-gray-600 border-4 shadow-md shadow-gray-600 dark:border-gray-400 dark:shadow-lg dark:shadow-gray-950'
const authorImage = 'mt-1'
const h3Class = 'text-xl xs:text-2xl py-2 dark:text-white'
const pClass = 'text-sm xs:text-base py-5 leading-8 xs:leading-8 text-gray-800 dark:text-gray-200'
const spanClass = 'text-teal-500 font-bold'
const imageClass = 'drop-shadow-lg'
const serviceCardContainerClass = 'xl:flex gap-5'
const serviceCardClass = 'bg-gray-200 flex flex-col items-center text-center shadow-md shadow-gray-600 px-4 py-6 xs:py-10 md:p-10 rounded-xl my-10 dark:bg-gray-700 dark:shadow-lg dark:shadow-gray-950 flex-1'
const serviceCardH3Class = 'text-base xs:text-lg font-medium pt-8 pb-2 dark:text-white'
const serviceCardH4Class = 'text-base xs:text-lg font-medium py-4 text-teal-600'
const serviceCardPClass = 'text-sm xs:text-base py-2 dark:text-white'
const serviceCardListClass = 'text-sm xs:text-base list-disc text-left text-gray-800 py-1 dark:text-gray-200'
const linkClass = 'text-teal-500 font-bold transform transition-transform duration-300 hover:text-white'

const BASE_PATH = getConfig.basePath

export default function Services() {
  return (
    <section id='services-container'>
      <div className={aboutLayoutClass}>
        <div className={authorImageContainer}>
          <LoadingImage
            containerClassName="w-full h-full rounded-full"
            className={authorImage}
            fill
            style={{ objectFit: 'cover' }}
            src={BASE_PATH + '/author-home-memoji.PNG'}
            alt='Memoji image of the author'
            priority
          />
        </div>
        <div id='services-description' className="w-full">
          <h2 id="about-me-title">About me</h2>
          <p className={pClass}>
            With a solid academic foundation and over
            <span className={spanClass}> 4 years </span>
            of hands-on experience as a QA engineer, I bring a unique blend of technical expertise and
            <span className={spanClass}> quality-driven mindset </span>
            to the field of web development.
          </p>
          <p className={pClass}>
            My transition from ensuring product excellence to actively participating in its creation has honed my problem-solving skills,
            collaborative nature, and commitment to delivering polished and user-centric applications. I am excited to leverage my skills in
            HTML, CSS, JavaScript, and my penchant for precision to contribute effectively to innovative web development projects. For a more
            detailed summary of my qualifications, click <Link href='/resume' className={linkClass}>here</Link>!
          </p>
        </div>
      </div>
      <div id='service-card-container' className={serviceCardContainerClass}>
        <FadeInSection className={serviceCardClass}>
            <LoadingImage
            containerClassName="-mr-6 mt-4"
            className={imageClass}
            src={BASE_PATH + '/web-development-icon.png'}
            alt='Web development icon'
            width={130}
            height={130}
            priority
            />
            <h3 className={serviceCardH3Class}>Web Development</h3>
            <p className={serviceCardPClass}>
              With a knack for HTML, CSS, and JavaScript, I build stunning, user-friendly websites that are both visually appealing and functional.
            </p>
            <h4 className={serviceCardH4Class}>Technologies used</h4>
            <ul>
              <li className={serviceCardListClass}>React.js</li>
              <li className={serviceCardListClass}>HTML</li>
              <li className={serviceCardListClass}>CSS</li>
            </ul>
        </FadeInSection>
        <FadeInSection className={serviceCardClass}>
            <LoadingImage
            className={imageClass}
            src={BASE_PATH + '/programming-icon.png'}
            alt='Programming icon'
            width={140}
            height={140}
            priority
            />
            <h3 className={serviceCardH3Class}>Programming</h3>
            <p className={serviceCardPClass}>
              I love bringing ideas to life through programming, creating robust applications that solve real-world problems.
            </p>
            <h4 className={serviceCardH4Class}>Technologies used</h4>
            <ul>
              <li className={serviceCardListClass}>JavaScript</li>
              <li className={serviceCardListClass}>Python</li>
              <li className={serviceCardListClass}>Java</li>
            </ul>
        </FadeInSection>
        <FadeInSection className={serviceCardClass}>
            <LoadingImage
            containerClassName="-ml-8"
            className={imageClass}
            src={BASE_PATH + '/automation-icon.png'}
            alt='Automation icon'
            width={140}
            height={140}
            priority
            />
            <h3 className={serviceCardH3Class}>Automation</h3>
            <p className={serviceCardPClass}>
              I specialize in automated software testing, making sure your applications run smoothly and efficiently with minimal manual intervention.
            </p>
            <h4 className={serviceCardH4Class}>Technologies used</h4>
            <ul>
              <li className={serviceCardListClass}>Playwright</li>
              <li className={serviceCardListClass}>Selenium</li>
              <li className={serviceCardListClass}>Cypress</li>
            </ul>
        </FadeInSection>
      </div>
    </section>
  )
}
