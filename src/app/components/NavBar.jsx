'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BsBriefcaseFill } from 'react-icons/bs'

const navContainer =
  'fixed top-0 left-1/2 z-40 w-full max-w-[2560px] -translate-x-1/2 px-5 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-[480px]'
const navInner =
  'mt-3 md:mt-4 rounded-2xl bg-gray-200/70 dark:bg-gray-900/70 backdrop-blur border border-gray-300/80 dark:border-gray-700/80 shadow-md dark:shadow-gray-950'
const navContent =
  'flex items-center justify-between px-4 sm:px-6 py-2.5 text-sm sm:text-base text-gray-800 dark:text-gray-100'
const brand =
  'font-bold tracking-tight text-gray-900 dark:text-white'
const linksContainerDesktop =
  'hidden md:flex items-center gap-4 sm:gap-6'
const linkBase =
  'group relative px-1 py-0.5 transition-colors duration-150 hover:text-cyan-600 dark:hover:text-cyan-400'
const activeUnderline =
  'absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-cyan-500 dark:bg-cyan-400'
const mobileToggleButton =
  'md:hidden inline-flex items-center justify-center rounded-full p-1.5 text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-500 hover:bg-gray-200/70 dark:hover:bg-gray-800/80 transition-colors duration-150'
const mobileMenuWrapper =
  'grid transition-[grid-template-rows] duration-200 ease-out md:hidden'
const mobileMenu =
  'border-t border-gray-200/60 dark:border-gray-700/80 px-4 sm:px-6 pb-3 text-sm sm:text-base overflow-hidden transition-opacity duration-200'
const mobileLink =
  'block w-full py-2 first:pt-3 last:pb-1 text-gray-800 dark:text-gray-100 hover:text-cyan-600 dark:hover:text-cyan-400'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export default function NavBar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (href) => pathname === href

  const handleToggle = () => setIsOpen((open) => !open)
  const handleNavigate = () => setIsOpen(false)

  return (
    <nav className={navContainer} aria-label="Main navigation">
      <div className={navInner}>
        <div className={navContent}>
          <Link
            href="/"
            className={`${brand} inline-flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-150`}
            onClick={handleNavigate}
          >
            <BsBriefcaseFill className="text-xl" />
            <span>My Portfolio</span>
          </Link>
          {/* Desktop links */}
          <div className={linksContainerDesktop}>
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={linkBase}
                scroll
              >
                <span className="relative inline-flex flex-col items-start">
                  <span>{label}</span>
                  <span
                    className={`${activeUnderline} origin-left transform transition-transform duration-150 ${
                      isActive(href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
            <Link
              href="/resume"
              className={linkBase}
            >
              <span className="relative inline-flex flex-col items-start">
                <span>Resume</span>
                <span
                  className={`${activeUnderline} origin-left transform transition-transform duration-150 ${
                    pathname === '/resume'
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>
          {/* Mobile menu toggle */}
          <button
            type="button"
            className={mobileToggleButton}
            onClick={handleToggle}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle navigation</span>
            <span>{isOpen ? '✕' : '☰'}</span>
          </button>
        </div>
        {/* Mobile dropdown */}
        <div
          className={mobileMenuWrapper}
          style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
          aria-hidden={!isOpen}
        >
          <div className="min-h-0">
            <div className={`${mobileMenu} ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={mobileLink}
                  onClick={handleNavigate}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/resume"
                className={mobileLink}
                onClick={handleNavigate}
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

