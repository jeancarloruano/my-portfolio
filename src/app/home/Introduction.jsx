import { BsLinkedin, BsGithub, BsMailbox2, BsBriefcaseFill } from 'react-icons/bs'
import Link from 'next/link'
import getConfig from '../../../next.config'

const titleContainer = 'text-center p10'
const mediaNavContainer =
  'flex justify-center gap-8 xs:gap-10 md:gap-16 py-3 text-gray-600 text-3xl xs:text-4xl md:text-4xl dark:text-gray-400'
const mediaIcon =
  'transition duration-100 ease-in-out hover:text-cyan-500 hover:scale-105 md:active:text-cyan-600'
const links = ['https://www.linkedin.com/in/jeancarloruano/', 'https://github.com/jeancarloruano', '/resume']
const BASE_PATH = getConfig.basePath

export default function Introduction() {
  return (
    <header id='site-title'>
      <div id='title-container' className={titleContainer}>
        <h1 id='author-name'>Jeancarlo Ruano</h1>
        <h2 id='author-title'>Web Developer | QA Engineer</h2>
        <p id='header-description' className='header-description'>Providing services for web development and test automation.
          Reach out below, and let&apos;s make some magic happen!
        </p>
      </div>
      <nav id='media-icon-container' className={mediaNavContainer}>
        <a id='linkedin-icon' className={mediaIcon} href={links[0]} target='_blank' rel='noreferrer'>
          <BsLinkedin />
        </a>
        <a id='github-icon' className={mediaIcon} href={links[1]} target='_blank' rel='noreferrer'>
          <BsGithub />
        </a>
        <Link id='email-icon' href='/contact' className={mediaIcon}>
          <BsMailbox2 />
        </Link>
        <a id='resume-icon' className={mediaIcon} href={BASE_PATH + links[2]} target='_self'>
          <BsBriefcaseFill />
        </a>
      </nav>
    </header>
  )
}
