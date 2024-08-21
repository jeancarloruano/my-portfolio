import './globals.css'
import Providers from './providers.js'

export const metadata = {
  title: 'My Portfolio',
  description: 'My projects portfolio.',
}

const bodyClass = 'min-h-screen max-w-[2560px] mx-auto bg-gray-100 px-5 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-[480px] dark:bg-gray-800'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="body" className={bodyClass}>         
          <Providers>{children}</Providers>
      </body>     
    </html>
  )
}
