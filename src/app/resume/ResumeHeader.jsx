import { BsGeoAltFill, BsLinkedin, BsGithub } from 'react-icons/bs'

const headerCustom = 'text-center'
const headerDescription = 'header-description mb-4'
const locationWrapper = 'inline-flex items-center justify-center gap-3'
const socialIconClass =
  'text-xl text-gray-600 dark:text-gray-300 transition duration-100 ease-in-out hover:text-cyan-500 hover:scale-105 md:active:text-cyan-600'

export default function ResumeHeader() {
  return (
    <header className={headerCustom}>
      <h1 id="author-name">Jeancarlo Ruano</h1>
      <h2 id="author-title">Web Developer | QA Engineer</h2>
      <p id="resume-location" className={headerDescription}>
        <span className={locationWrapper}>
          <BsGeoAltFill className="text-lg shrink-0" aria-hidden />
          <span>Los Angeles, CA</span>
          <span className="mx-1 text-gray-400 dark:text-gray-500" aria-hidden>•</span>
          <a
            href="https://www.linkedin.com/in/jeancarloruano/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <BsLinkedin className={socialIconClass} />
          </a>
          <span className="mx-1 text-gray-400 dark:text-gray-500" aria-hidden>•</span>
          <a
            href="https://github.com/jeancarloruano"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <BsGithub className={socialIconClass} />
          </a>
        </span>
      </p>
    </header>
  )
}