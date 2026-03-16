"use client"

import { ThemeProvider } from 'next-themes'
import ScrollToTopButton from './home/ScrollToTopButton'

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      {children}
      <ScrollToTopButton />
    </ThemeProvider>
  )
}

