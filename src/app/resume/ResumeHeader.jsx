import { BsGeoAltFill } from 'react-icons/bs'

const headerCustom = 'text-center'
const headerDescription = 'header-description mb-4'
const locationWrapper = 'inline-flex items-center justify-center gap-2'

export default function ResumeHeader() {
  return (
    <header className={headerCustom}>
      <h1 id="author-name">Jeancarlo Ruano</h1>
      <h2 id="author-title">Web Developer | QA Engineer</h2>
      <p id="resume-location" className={headerDescription}>
        <span className={locationWrapper}>
          <BsGeoAltFill className="text-lg shrink-0" aria-hidden />
          Los Angeles, CA
        </span>
      </p>
    </header>
  )
}