import Image from 'next/image'
import getConfig from '../../../next.config';

const h3ClassName = "text-2xl py-2 mt-20 dark:text-white"
const p1ClassName = "text-md py-5 leading-8 text-gray-800 dark:text-gray-200"
const spanClassName = "text-teal-500 font-bold"
const h4ClassName = "py-4 text-teal-600"
const pIpsumClassName = "text-gray-800 py-1 dark:text-gray-200"
const serviceCardClassName = "bg-gray-50 grid place-items-center text-center shadow-md shadow-gray-600 p-10 rounded-xl my-10 dark:bg-gray-700 dark:shadow-lg dark:shadow-gray-950"
const BASE_PATH = getConfig.basePath;

export default function Services() {
  return (
    <section>
      <div>
         <h3 className={h3ClassName}>What I can offer you</h3>
         <p className={p1ClassName}>With a solid academic foundation and over 
            <span className={spanClassName}> 3 years </span> 
            of hands-on experience as a QA engineer, I bring a unique blend of technical expertise and
            <span className={spanClassName}> quality-driven mindset </span>to the field of web development. 
         </p>
         <p className={p1ClassName}>
         My transition from ensuring product excellence to actively participating in its creation has honed my problem-solving skills, collaborative nature, and commitment to delivering polished and user-centric applications. I am excited to leverage my skills in HTML, CSS, JavaScript, and my penchant for precision to contribute effectively to innovative web development projects.
         </p >
         <p className={p1ClassName}>
            I can offer you a wide range of services including brand design, web-development and programming.
         </p>
      </div>
      <div className="lg:flex gap-5">
        <div className={serviceCardClassName}>
            <Image
            src={BASE_PATH + "/under-construction.png"}
            alt="Under construction image"
            width={100}
            height={100}
            priority
            />
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Lorem ipsum</h3>
            <p className="py-2 dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h4 className={h4ClassName}>Lorem ipsum dolor sit amet</h4>
            <p className={pIpsumClassName}>Lorem</p>
            <p className={pIpsumClassName}>Dolor</p>
            <p className={pIpsumClassName}>Ipsum</p>
        </div>
        <div className={serviceCardClassName}>
            <Image
            src={BASE_PATH + "/under-construction.png"}
            alt="Under construction image"
            width={100}
            height={100}
            priority
            />
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Lorem ipsum</h3>
            <p className="py-2 dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h4 className={h4ClassName}>Lorem ipsum dolor sit amet</h4>
            <p className={pIpsumClassName}>Lorem</p>
            <p className={pIpsumClassName}>Dolor</p>
            <p className={pIpsumClassName}>Ipsum</p>
        </div>
        <div className={serviceCardClassName}>
            <Image
            src={BASE_PATH + "/under-construction.png"}
            alt="Under construction image"
            width={100}
            height={100}
            priority
            />
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Lorem ipsum</h3>
            <p className="py-2 dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h4 className={h4ClassName}>Lorem ipsum dolor sit amet</h4>
            <p className={pIpsumClassName}>Lorem</p>
            <p className={pIpsumClassName}>Dolor</p>
            <p className={pIpsumClassName}>Ipsum</p>
        </div>
      </div>
    </section>
  )
}