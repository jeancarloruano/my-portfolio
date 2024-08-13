import Link from 'next/link'
import Image from 'next/image'
import { BsThreeDotsVertical } from "react-icons/bs";
import getConfig from '../../../next.config'
import ProjectModal from './ProjectModal'
import { useState } from 'react'

const h3Class = 'text-2xl py-2 mt-20 dark:text-white'
const pClass = 'text-md py-5 leading-8 text-gray-800 dark:text-gray-200'
const h4Class = 'text-lg lg:text-xl leading-8 py-2 text-gray-800 dark:text-gray-200'
const spanClass = 'font-bold'
const imageClass = 'rounded-lg'
const portfolioImageClass = 'relative rounded-lg shadow-md outline-none shadow-gray-600 object-cover transition duration-100 ease-in-out outline hover:outline-4 hover:outline-cyan-500 hover:scale-105 dark:shadow-lg dark:shadow-gray-950'
const portfoliosContainerClass = 'grid grid-cols-1 gap-8 py-10 lg:flex-row lg:flex-wrap lg:grid-cols-2'
const portfolioImageContainerClass = 'relative basis-1/2 flex-1 text-center'
const modalIconClass = 'absolute top-4 right-4 text-gray-100 z-20 text-2xl transition duration-100 ease-in-out hover:text-cyan-500'
const BASE_PATH = getConfig.basePath

export default function Portfolio() {
    const [showProjectModal, setShowProjectModal] = useState(false)

    const handleClickPortfolio = () => {
        setShowProjectModal(true)
    }

    const handleCloseModal = () => {
        setShowProjectModal(false)
    }

    return (
        <section>
            <div>
                <h3 className={h3Class}>My Projects</h3>
                <p className={pClass}>
                    Take a peek at some of the projects I&apos;ve been working on! In them, I blend a variety of cool technologies to create robust, user-friendly, and efficient web development and automation solutions.
                </p>

                <p className={pClass}>
                    Wondering how this website came to be? It was crafted using React, NextJS, and Tailwind CSS. Huge thanks to <Link href="https://youtu.be/k-Pi5ZMxHWY?si=zKnT1EjmQfDyVZMv" target="_blank" className="text-teal-500 font-bold transform transition-transform duration-300 hover:text-white hover:scale-105">developedbyed</Link> for the awesome tutorial that sparked the inspiration! Don&apos;t forget to check out and support his channel!
                </p>
                <p className={pClass}>
                    <span className={spanClass}>Note: </span>Currently, this website serves as a technology demonstration to highlight my knowledge in web development and various programming technologies. While I plan to use it as my portfolio, please be aware that certain sections, such as &quot;My Projects&quot; and &quot;Contact Me,&quot; are still under development.
                </p>
            </div>
            <div className={portfoliosContainerClass}>
                <div className={portfolioImageContainerClass}>
                    <h4 className={h4Class}>Academic Planner</h4>
                    <div className={portfolioImageClass} onClick={handleClickPortfolio}>
                        <BsThreeDotsVertical className={modalIconClass} />
                        <Image className={imageClass}
                            src={BASE_PATH + '/designs-placeholder.jpeg'}
                            alt='Designs placeholder image'
                            width={2000}
                            height={2000}
                            style={{ width: '100%', height: 'auto' }}
                            priority
                        />
                    </div>
                </div>
                <div className={portfolioImageContainerClass}>
                    <h4 className={h4Class}>Mobile Puzzle Game</h4>
                    <div className={portfolioImageClass} onClick={handleClickPortfolio}>
                        <BsThreeDotsVertical className={modalIconClass} />
                        <Image className={imageClass}
                            src={BASE_PATH + '/designs-placeholder.jpeg'}
                            alt='Designs placeholder image'
                            width={2000}
                            height={2000}
                            style={{ width: '100%', height: 'auto' }}
                            priority
                        />
                    </div>
                </div>
                <div className={portfolioImageContainerClass}>
                    <h4 className={h4Class}>Web Automation Framework</h4>
                    <div className={portfolioImageClass} onClick={handleClickPortfolio}>
                        <BsThreeDotsVertical className={modalIconClass} />
                        <Image className={imageClass}
                            src={BASE_PATH + '/designs-placeholder.jpeg'}
                            alt='Designs placeholder image'
                            width={2000}
                            height={2000}
                            style={{ width: '100%', height: 'auto' }}
                            priority
                        />
                    </div>
                </div>
                <div className={portfolioImageContainerClass}>
                    <h4 className={h4Class}>API Automation Framework</h4>
                    <div className={portfolioImageClass} onClick={handleClickPortfolio}>
                        <BsThreeDotsVertical className={modalIconClass} />
                        <Image className={imageClass}
                            src={BASE_PATH + '/designs-placeholder.jpeg'}
                            alt='Designs placeholder image'
                            width={2000}
                            height={2000}
                            style={{ width: '100%', height: 'auto' }}
                            priority
                        />
                    </div>
                </div>
            </div>
            {showProjectModal && <ProjectModal onClose={handleCloseModal}/>}
        </section>
    )
}
