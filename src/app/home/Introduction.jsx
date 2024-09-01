import {BsLinkedin, BsGithub, BsMailbox2, BsBriefcaseFill} from 'react-icons/bs'
import Image from 'next/image'
import getConfig from '../../../next.config'

const titleContainer = 'text-center p10'
const titleDesc = 'text-sm xs:text-base md:text-xl py-5 leading-8 xs:leading-8 md:leading-8 text-gray-800 max-w-lg mx-auto dark:text-gray-200'
const mediaNavContainer = 'flex justify-center gap-8 xs:gap-10 md:gap-16 py-3 text-gray-600 text-3xl xs:text-4xl md:text-5xl dark:text-gray-400'
const mediaIcon = 'transition duration-100 ease-in-out hover:text-cyan-500 hover:scale-105 md:active:text-cyan-600'
const authorImageContainer = 'relative mx-auto bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full w-48 h-48 xs:w-60 xs:h-60 sm:w-80 sm:h-80 mt-20 overflow-hidden md:h-96 md:w-96 border-gray-600 border-4 shadow-md shadow-gray-600 dark:border-gray-400 dark:shadow-lg dark:shadow-gray-950'
const authorImage = 'mt-1'
const links = ['https://www.linkedin.com/in/jeancarloruano/', 'https://github.com/jeancarloruano', '/resume']
const BASE_PATH = getConfig.basePath

export default function Introduction({contactFormRef}) {
  return (
    <header id='site-title'>
      <div id='title-container' className={titleContainer}>
        <h1>Jeancarlo Ruano</h1>
        <h2>Developer and software tester</h2>
        <p id='title-description' className={titleDesc}>Providing services for programming and test automation.
          Reach out below, and let&apos;s make some magic happen!
        </p>
      </div>
      <nav id='media-icon-container' className={mediaNavContainer}>        
        <a id='linkedin-icon' className={mediaIcon} href={links[0]} target='_blank'><BsLinkedin/></a>
        <a id='github-icon' className={mediaIcon} href={links[1]} target='_blank'><BsGithub/></a>
        <a id='resume-icon' className={mediaIcon} href={BASE_PATH + links[2]} target='_self'><BsBriefcaseFill/></a>
        <button id='email-icon' onClick={() => contactFormRef.current.scrollIntoView({behavior: 'smooth'})} className={mediaIcon}><BsMailbox2/></button>
      </nav>
      <div className={authorImageContainer}>
        <Image className={authorImage} fill
          style={{objectFit:'cover'}}
          src={BASE_PATH + '/author-home-memoji.PNG'}
          alt='Memoji image of the author'
          priority
        />    
      </div>
    </header>
  )
}
