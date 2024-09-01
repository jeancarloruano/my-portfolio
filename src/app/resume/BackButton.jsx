import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import getConfig from '../../../next.config'

const BackButton = () => {
    const backButtonContainer = 'fixed bottom-5 right-5 mb-5 mr-5 z-50'
    const backButton = 'animate-bounce-fade animation-iteration-1 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer text-4xl xs:text-5xl text-gray-600 shadow-md shadow-gray-600 dark:text-gray-400 dark:shadow-lg dark:shadow-gray-950'
    const bsFillArrowLeftCircleFill = 'hover:text-cyan-500 hover:scale-105 md:active:text-cyan-600 transition duration-100 ease-in-out'
    const BASE_PATH = getConfig.basePath

    return (
        <div className={backButtonContainer}>
            <a className={backButton} href={BASE_PATH + '/'}>
                <BsFillArrowLeftCircleFill className={bsFillArrowLeftCircleFill}/>
            </a>
        </div>
    )
}

export default BackButton
