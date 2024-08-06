import Image from 'next/image'
import getConfig from '../../../next.config';

const h3ClassName = "text-2xl py-2 mt-20 dark:text-white";
const p1ClassName = "text-md py-5 leading-8 text-gray-800 dark:text-gray-200";
const spanClassName = "text-teal-500 font-bold";
const h4ClassName = "text-lg font-medium py-4 text-teal-600";
const serviceCardListClassName = "list-disc text-left text-gray-800 py-1 dark:text-gray-200";
const serviceCardClassName = "bg-gray-50 flex flex-col items-center text-center shadow-md shadow-gray-600 p-10 rounded-xl my-10 dark:bg-gray-700 dark:shadow-lg dark:shadow-gray-950 flex-1";
const BASE_PATH = getConfig.basePath;

export default function Services() {
  return (
    <section>
      <div>
         <h3 className={h3ClassName}>About me</h3>
         <p className={p1ClassName}>With a solid academic foundation and over 
            <span className={spanClassName}> 3 years </span> 
            of hands-on experience as a QA engineer, I bring a unique blend of technical expertise and
            <span className={spanClassName}> quality-driven mindset </span>to the field of web development. 
         </p>
         <p className={p1ClassName}>
         My transition from ensuring product excellence to actively participating in its creation has honed my problem-solving skills, collaborative nature, and commitment to delivering polished and user-centric applications. I am excited to leverage my skills in HTML, CSS, JavaScript, and my penchant for precision to contribute effectively to innovative web development projects.
         </p >
         <p className={p1ClassName}>
            I can offer you a wide range of services including web-development, programming and automated software testing.
         </p>
      </div>
      <div className="lg:flex gap-5">
        <div className={serviceCardClassName}>
            <Image className='drop-shadow-lg'
            src={BASE_PATH + "/web-development-icon.png"}
            alt="Web development icon"
            width={150}
            height={150}
            priority
            />
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Web Development</h3>
            <p className="py-2 dark:text-white">
              With a knack for HTML, CSS, and JavaScript, I build stunning, user-friendly websites that are both visually appealing and functional.
            </p>
            <h4 className={h4ClassName}>Technologies used</h4>
            <ul>
              <li className={serviceCardListClassName}>React.js</li>
              <li className={serviceCardListClassName}>HTML</li>
              <li className={serviceCardListClassName}>CSS</li>
            </ul>
        </div>
        <div className={serviceCardClassName}>
            <Image className='drop-shadow-lg'
            src={BASE_PATH + "/programming-icon.png"}
            alt="Programming icon"
            width={150}
            height={150}
            priority
            />
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Programming</h3>
            <p className="py-2 dark:text-white">
              I love bringing ideas to life through programming, creating robust applications that solve real-world problems.
            </p>
            <h4 className={h4ClassName}>Technologies used</h4>
            <ul>
              <li className={serviceCardListClassName}>JavaScript</li>
              <li className={serviceCardListClassName}>Python</li>
              <li className={serviceCardListClassName}>Java</li>
            </ul>
        </div>
        <div className={serviceCardClassName}>
            <Image className='drop-shadow-lg'
            src={BASE_PATH + "/automation-icon.png"}
            alt="Automation icon"
            width={150}
            height={150}
            priority
            />
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Automation</h3>
            <p className="py-2 dark:text-white">
              I specialize in automated software testing, making sure your applications run smoothly and efficiently with minimal manual intervention.
            </p>
            <h4 className={h4ClassName}>Technologies used</h4>
            <ul>
              <li className={serviceCardListClassName}>Playwright</li>
              <li className={serviceCardListClassName}>Selenium</li>
              <li className={serviceCardListClassName}>TestNG</li>
            </ul>
        </div>
      </div>
    </section>
  )
}
