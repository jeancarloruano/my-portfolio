'use client'
import { useRef } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Introduction from './components/Introduction'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import ContactForm from './components/ContactForm'
import ScrollToTopButton from './components/ScrollToTopButton'

export default function Home() {
  const contactFormRef = useRef()
  return (
    <div id='home'>
      <div id='home-inner'>
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
