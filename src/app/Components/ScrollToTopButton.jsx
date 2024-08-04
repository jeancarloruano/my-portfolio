"use client"
import React, {useState, useEffect} from 'react'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const ScrollToTopButton = () => {
    const [showScrollToTopButton, setShowScrollToTopButton] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 900) {
                setShowScrollToTopButton(true)
            }
            else {
                setShowScrollToTopButton(false)
            }
        })
    }, [])

    return (
        <div className='fixed bottom-5 right-5 mb-5 mr-5 sm:mr-5'>
            {showScrollToTopButton && <div className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer text-5xl dark:text-gray-400 dark:shadow-lg dark:shadow-gray-950"><BsFillArrowUpCircleFill onClick={scrollToTop} className='hover:text-cyan-500 hover:scale-105 transition duration-100 ease-in-out'/></div>}
        </div>
    )
}

export default ScrollToTopButton
