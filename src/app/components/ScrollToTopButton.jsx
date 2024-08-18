import React, {useState, useEffect} from 'react'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const ScrollToTopButton = () => {
    const [showScrollToTopButton, setShowScrollToTopButton] = useState(false)
    const scrollToTopButtonContainerClass = 'fixed bottom-5 right-5 mb-5 mr-5 z-50'
    const scrollToTopButtonClass = 'animate-bounce-fade animation-iteration-1 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer text-5xl text-gray-600 shadow-md shadow-gray-600 dark:text-gray-400 dark:shadow-lg dark:shadow-gray-950'
    const bsFillArrowUpCircleFillClass = 'hover:text-cyan-500 hover:scale-105 transition duration-100 ease-in-out'

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 900) {
                setShowScrollToTopButton(true)
            } else {
                setShowScrollToTopButton(false)
            }
        };

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [])

    return (
        <div className={scrollToTopButtonContainerClass}>
            {showScrollToTopButton && (
                <div className={scrollToTopButtonClass}>
                    <BsFillArrowUpCircleFill onClick={scrollToTop} className={bsFillArrowUpCircleFillClass}/>
                </div>
            )}
        </div>
    )
}

export default ScrollToTopButton
