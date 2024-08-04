import './globals.css'
import Providers from './providers.js'

export const metadata = {
  title: "Projects by Jeancarlo",
  description: "Portfolio demo website.",
}

const bodyClass = "min-h-screen bg-gray-100 px-10 md:px-20 lg:px-40 2xl:px-60 dark:bg-gray-800"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyClass}>         
          <Providers>{children}</Providers>
      </body>     
    </html>
  )
}
