'use client'

import { useEffect, useRef, useState } from 'react'

export default function FadeInSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      })
    })

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [])

  const baseClasses =
    'transition-all duration-700 ease-out will-change-transform will-change-opacity'
  const hiddenClasses = 'opacity-0 translate-y-4'
  const visibleClasses = 'opacity-100 translate-y-0'
  const delayClass = delay ? `delay-[${delay}ms]` : ''

  return (
    <div
      ref={ref}
      className={`${className} ${baseClasses} ${
        isVisible ? visibleClasses : hiddenClasses
      } ${delayClass}`}
    >
      {children}
    </div>
  )
}

