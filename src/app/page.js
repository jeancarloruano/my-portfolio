'use client'
import { useRef } from 'react'
import Footer from './home/Footer'
import Introduction from './home/Introduction'
import Services from './home/Services'
import Portfolio from './home/Portfolio'
import ContactForm from './home/ContactForm'
import ScrollToTopButton from './home/ScrollToTopButton'

const homePageContainer = 'pt-14'

export default function Home() {
  const contactFormRef = useRef()
  return (
    <div id='home' className={homePageContainer}>
      <ScrollToTopButton />
      <Introduction contactFormRef={contactFormRef} />
      <Services />
      <Portfolio />
      <ContactForm ref={contactFormRef} />
      <Footer />
    </div>
  )
}
