import Link from "next/link";
import Image from "next/image"
import getConfig from '../../../next.config';


const h3ClassName = "text-2xl py-2 mt-20 dark:text-white"
const p1ClassName = "text-md py-5 leading-8 text-gray-800 dark:text-gray-200"
const portfolioImageClassName = "rounded-lg shadow-md shadow-gray-600 object-cover transition duration-100 ease-in-out hover:scale-105 dark:shadow-lg dark:shadow-gray-950"
const portfoliosContainerClass = "grid grid-cols-1 gap-8 py-10 lg:flex-row lg:flex-wrap lg:grid-cols-2"
const portfolioImageContainerClass = "basis-1/2 flex-1"
const BASE_PATH = getConfig.basePath;

export default function Portfolio() {
  return (
    <section>
        <div>
            <h3 className={h3ClassName}>My Projects</h3>
            <p className={p1ClassName}>
                Take a peek at some of the projects I&apos;ve been working on! In them, I blend a variety of cool technologies to create robust, user-friendly, and efficient web development and automation solutions.
            </p>

            <p className={p1ClassName}>
                Wondering how this website came to be? It was crafted using React, NextJS, and Tailwind CSS. Huge thanks to <Link href="https://youtu.be/k-Pi5ZMxHWY?si=zKnT1EjmQfDyVZMv" target="_blank" className="text-teal-500 font-bold transform transition-transform duration-300 hover:text-white hover:scale-105">developedbyed</Link> for the awesome tutorial that sparked the inspiration! Don&apos;t forget to check out and support his channel!
            </p>

        </div>
        <div className={portfoliosContainerClass}>
            <div className={portfolioImageContainerClass}>
                <p>Academic Planner</p>
                <Image className={portfolioImageClassName}
                src={BASE_PATH + "/designs-placeholder.jpeg"}
                alt="Designs placeholder image"
                width={2000}
                height={2000}
                style={{ width: "100%", height: "auto" }}
                priority
                />
            </div>
            <div className={portfolioImageContainerClass}>
                <p>Android Puzzle Game</p>
                <Image className={portfolioImageClassName}
                src={BASE_PATH + "/designs-placeholder.jpeg"}
                alt="Designs placeholder image"
                width={2000}
                height={2000}
                style={{ width: "100%", height: "auto" }}
                priority
                />
            </div>
            <div className={portfolioImageContainerClass}>
                <p>API Automation Framework</p>
                <Image className={portfolioImageClassName}
                src={BASE_PATH + "/designs-placeholder.jpeg"}
                alt="Designs placeholder image"
                width={2000}
                height={2000}
                style={{ width: "100%", height: "auto" }}
                priority
                />
            </div>
            <div className={portfolioImageContainerClass}>
                <p>Web Automation Framework</p>
                <Image className={portfolioImageClassName}
                src={BASE_PATH + "/designs-placeholder.jpeg"}
                alt="Designs placeholder image"
                width={2000}
                height={2000}
                style={{ width: "100%", height: "auto" }}
                priority
                />
            </div>
        </div>   
    </section>
  )
}