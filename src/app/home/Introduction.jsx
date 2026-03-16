import { BsLinkedin, BsGithub, BsInstagram, BsFacebook, BsTwitterX } from 'react-icons/bs'
import getConfig from '../../../next.config'

const titleContainer = 'text-center p10'
const mediaNavContainer =
  'flex justify-center gap-8 xs:gap-10 md:gap-16 py-3 text-gray-600 text-3xl xs:text-4xl md:text-4xl dark:text-gray-400'
const mediaIcon =
  'transition duration-100 ease-in-out hover:text-cyan-500 hover:scale-105 md:active:text-cyan-600'
const links = ['https://www.linkedin.com/in/jeancarloruano/', 'https://github.com/jeancarloruano', 'https://www.instagram.com/', 'https://www.facebook.com/', 'https://x.com/']
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
        <a id='instagram-icon' className={mediaIcon} href={links[2]} target='_blank' rel='noreferrer' >
          <BsInstagram />
        </a>
        <a id='facebook-icon' className={mediaIcon} href={links[3]} target='_blank' rel='noreferrer'>
          <BsFacebook />
        </a>
        <a id='twitter-icon' className={mediaIcon} href={links[4]} target='_blank' rel='noreferrer'>
          <BsTwitterX />
        </a>
      </nav>
    </header>
  )
}
