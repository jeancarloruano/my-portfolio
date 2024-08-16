import Image from 'next/image'
import getConfig from '../../../next.config'
import Link from 'next/link'

const h3Class = 'text-2xl py-2 mt-20 dark:text-white'
const pClass = 'text-md py-5 leading-8 text-gray-800 dark:text-gray-200'
const spanClass = 'text-teal-500 font-bold'
const imageClass = 'drop-shadow-lg'
const serviceCardContainerClass = 'lg:flex gap-5'
const serviceCardClass = 'bg-gray-200 flex flex-col items-center text-center shadow-md shadow-gray-600 p-10 rounded-xl my-10 dark:bg-gray-700 dark:shadow-lg dark:shadow-gray-950 flex-1'
const serviceCardH3Class = 'text-lg font-medium pt-8 pb-2 dark:text-white'
const serviceCardH4Class = 'text-lg font-medium py-4 text-teal-600'
const serviceCardPClass = 'py-2 dark:text-white'
const serviceCardListClass = 'list-disc text-left text-gray-800 py-1 dark:text-gray-200'
const linkClass = 'text-teal-500 font-bold transform transition-transform duration-300 hover:text-white'

const BASE_PATH = getConfig.basePath

export default function Services() {
  return (
    <section id='services-container'>
      <div id='services-description'>
         <h3 className={h3Class}>About me</h3>
         <p className={pClass}>With a solid academic foundation and over 
            <span className={spanClass}> 3 years </span> 
            of hands-on experience as a QA engineer, I bring a unique blend of technical expertise and
            <span className={spanClass}> quality-driven mindset </span>to the field of web development. 
         </p>
         <p className={pClass}>
         My transition from ensuring product excellence to actively participating in its creation has honed my problem-solving skills, collaborative nature, and commitment to delivering polished and user-centric applications. I am excited to leverage my skills in HTML, CSS, JavaScript, and my penchant for precision to contribute effectively to innovative web development projects.
         For a more detailed summary of my qualifications, click <Link href='/resume' className={linkClass}>here</Link>!
         </p >
         <p className={pClass}>
            I can offer you a wide range of services including web-development, programming and automated software testing.
         </p>
      </div>
      <div id='service-card-container' className={serviceCardContainerClass}>
        <div className={serviceCardClass}>
            <Image className={imageClass}
            src={BASE_PATH + '/web-development-icon.png'}
            alt='Web development icon'
            width={150}
            height={150}
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
        </div>
        <div className={serviceCardClass}>
            <Image className={imageClass}
            src={BASE_PATH + '/programming-icon.png'}
            alt='Programming icon'
            width={150}
            height={150}
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
        </div>
        <div className={serviceCardClass}>
            <Image className={imageClass}
            src={BASE_PATH + '/automation-icon.png'}
            alt='Automation icon'
            width={150}
            height={150}
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
              <li className={serviceCardListClass}>TestNG</li>
            </ul>
        </div>
      </div>
    </section>
  )
}
