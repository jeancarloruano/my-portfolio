'use client'

import Footer from './home/Footer'
import Introduction from './home/Introduction'
import Services from './home/Services'

const homePageContainer = 'pt-14'

export default function Home() {
  return (
    <div id='home' className={homePageContainer}>
      <Introduction />
      <Services />
      <Footer />
    </div>
  )
}
