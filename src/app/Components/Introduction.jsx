"use client"
import {BsFileEarmarkPersonFill, BsLinkedin, BsGithub, BsMailbox2} from 'react-icons/bs'
import Image from 'next/image'
import getConfig from '../../../next.config';

const divBodyClassName = "text-center p10"
const h2ClassName = "text-5xl py-2 text-cyan-500 font-medium md:text-6xl lg:text-7xl"
const h3ClassName = "text-2xl py-2 md:text-3xl dark:text-white"
const pClassName = "text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200"
const logoContainerClassName = "text-4xl flex justify-center gap-16 py-3 text-gray-600 md:text-5xl dark:text-gray-400"
const logoClassName = "transition duration-100 ease-in-out hover:text-cyan-500 hover:scale-105"
const imageContainerClassName = "relative mx-auto bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 border-gray-600 border-4 shadow-md shadow-gray-400 dark:border-gray-400 dark:shadow-lg dark:shadow-gray-950"
const links = ["https://www.linkedin.com/in/jeancarloruano/", "https://github.com/jeancarloruano", "resume"]
const BASE_PATH = getConfig.basePath;

export default function Introduction({contactFormRef}) {
  return (
    <section>
      <div className={divBodyClassName}>
        <h2 className={h2ClassName}>Jeancarlo Ruano</h2>
        <h3 className={h3ClassName}>Developer and designer</h3>
        <p className={pClassName}>Freelancer providing services for programming and design content needs.
          Hit me up down below and let&apos;s get to work!
        </p>
      </div>
      <div className={logoContainerClassName}>        
        <a className={logoClassName} href={links[0]} target="_blank"><BsLinkedin/></a>
        <a className={logoClassName} href={links[1]} target="_blank"><BsGithub/></a>
        <a className={logoClassName} href={links[2]} target="_blank"><BsFileEarmarkPersonFill/></a>
        <button onClick={() => contactFormRef.current.scrollIntoView({behavior: "smooth"})} className={logoClassName}><BsMailbox2/></button>
      </div>
      <div className={imageContainerClassName}>
        <Image className="mt-1" fill
          style={{objectFit:"cover"}}
          src={BASE_PATH + "/author.png"}
          alt="Memoji image of the author"
          priority
        />    
      </div>
    </section>
  )
}