"use client"
import { useRef } from 'react'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Introduction from './Components/Introduction'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import ContactForm from './Components/ContactForm'
import ScrollToTopButton from './Components/ScrollToTopButton'

export default function Home() {
  const contactFormRef = useRef()
  return (
    <div>
      <div className='relative h-screen overflow-auto'>
        <ScrollToTopButton />
        <NavBar />
        <Introduction contactFormRef={contactFormRef} />
        <Services />
        <Portfolio />
        <ContactForm ref={contactFormRef} />
        <Footer />
      </div>
    </div>
  )
}
