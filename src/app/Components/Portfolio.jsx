import Image from "next/image"
import getConfig from '../../../next.config';


const h3ClassName = "text-2xl py-2 mt-20 dark:text-white"
const p1ClassName = "text-md py-5 leading-8 text-gray-800 dark:text-gray-200"
const portfolioImageClassName = "rounded-lg shadow-md shadow-gray-600 object-cover transition duration-100 ease-in-out hover:scale-105 dark:shadow-lg dark:shadow-gray-950"
const BASE_PATH = getConfig.basePath;

export default function Portfolio() {
  return (
    <section>
        <div>
            <h3 className={h3ClassName}>My Projects</h3>
            <p className={p1ClassName}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ullam, voluptates, facere odit asperiores laudantium eos sed quam voluptatibus, voluptatem tempore explicabo inventore vitae blanditiis reiciendis cumque commodi omnis? Possimus!
            </p>
        </div>
        <div className="grid grid-cols-1 gap-8 py-10 lg:flex-row lg:flex-wrap lg:grid-cols-2">
            <div className="basis-1/2 flex-1" >
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
            <div className="basis-1/2 flex-1" >
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
            <div className="basis-1/2 flex-1" >
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
            <div className="basis-1/2 flex-1" >
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