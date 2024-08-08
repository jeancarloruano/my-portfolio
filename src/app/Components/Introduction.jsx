import {BsFileEarmarkPersonFill, BsLinkedin, BsGithub, BsMailbox2} from 'react-icons/bs'
import Image from 'next/image'
import getConfig from '../../../next.config'

const introContainerClass = 'text-center p10'
const h2Class = 'text-5xl py-2 text-cyan-500 font-medium md:text-6xl lg:text-7xl'
const h3Class = 'text-2xl py-2 md:text-3xl dark:text-white'
const pClass = 'text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200'
const logoContainerClass = 'text-4xl flex justify-center gap-16 py-3 text-gray-600 md:text-5xl dark:text-gray-400'
const logoClass = 'transition duration-100 ease-in-out hover:text-cyan-500 hover:scale-105'
const imageContainerClass = 'relative mx-auto bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 border-gray-600 border-4 shadow-md shadow-gray-600 dark:border-gray-400 dark:shadow-lg dark:shadow-gray-950'
const imageClass = 'mt-1'
const links = ['https://www.linkedin.com/in/jeancarloruano/', 'https://github.com/jeancarloruano', 'resume']
const BASE_PATH = getConfig.basePath

export default function Introduction({contactFormRef}) {
  return (
    <section>
      <div className={introContainerClass}>
        <h2 className={h2Class}>Jeancarlo Ruano</h2>
        <h3 className={h3Class}>Developer and software tester</h3>
        <p className={pClass}>Providing services for programming and test automation.
          Reach out below, and let&apos;s make some magic happen!
        </p>
      </div>
      <div className={logoContainerClass}>        
        <a className={logoClass} href={links[0]} target='_blank'><BsLinkedin/></a>
        <a className={logoClass} href={links[1]} target='_blank'><BsGithub/></a>
        <a className={logoClass} href={links[2]} target='_self'><BsFileEarmarkPersonFill/></a>
        <button onClick={() => contactFormRef.current.scrollIntoView({behavior: 'smooth'})} className={logoClass}><BsMailbox2/></button>
      </div>
      <div className={imageContainerClass}>
        <Image className={imageClass} fill
          style={{objectFit:"cover"}}
          src={BASE_PATH + "/author-home-memoji.PNG"}
          alt="Memoji image of the author"
          priority
        />    
      </div>
    </section>
  )
}
