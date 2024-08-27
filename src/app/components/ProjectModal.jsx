import React from 'react'
import { BsXCircleFill } from "react-icons/bs";
import Image from 'next/image';
import getConfig from '../../../next.config'
import { useRef } from 'react';

const projectModalContainerClass = 'fixed inset-0 z-50 flex items-center justify-center bg-gray-950 bg-opacity-50 dark:bg-opacity-75 backdrop-blur-md'
const projectModalClass = 'animate-scroll-from-bottom animation-iteration-1 bg-gray-200 flex flex-col items-center justify-center justify-between w-[70vw] h-[50vh] sm:w-[50vw] md:h-[60vh] max-w-2xl max-h-screen-md m-10 border-8 border-gray-600 shadow-md shadow-gray-600 p-10 rounded-xl dark:bg-gray-700 dark:border-gray-400 dark:shadow-lg dark:shadow-gray-950'
const imageContainerClass = 'relative w-40 h-40 sm:w-60 sm:h-60'
const pClass = 'text-sm xs:text-base leading-8 xs:leading-8 text-center py-2 dark:text-white'
const exitButtonClass = 'inset-0 flex items-center justify-center hover:text-cyan-500 hover:scale-105 md:active:text-cyan-600 transition duration-100 ease-in-out'
const exitButtonContainerClass = 'place-self-end rounded-full text-gray-600 shadow-md shadow-gray-600 dark:text-gray-400 dark:shadow-lg dark:shadow-gray-950'
const BASE_PATH = getConfig.basePath


function ProjectModal({onClose}) {
    const projectModalRef = useRef()

    const handleClickOutsideModal = (event) => {
        if(projectModalRef.current === event.target){
            onClose()
        }
    }

    const handleClickExitButton = () => {
        onClose()
    }

    return (
        <div onClick={handleClickOutsideModal} ref={projectModalRef} className={projectModalContainerClass}>
            <div className={projectModalClass}>
                <div className={exitButtonContainerClass}><button onClick={handleClickExitButton} className={exitButtonClass}><BsXCircleFill size={30}/></button></div>
                <div className={imageContainerClass}>
                    <Image
                        fill
                        style={{ objectFit: 'contain' }}
                        src={BASE_PATH + '/under-construction.png'}
                        alt='404 Memoji image of the author'
                        priority
                    />    
                </div>
                <p className={pClass}>
                    Sorry, this feature is still in development.
                    <br/>Check again later!
                </p>
            </div>
        </div>
    )
}

export default ProjectModal