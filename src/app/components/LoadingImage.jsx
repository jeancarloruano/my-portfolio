'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function LoadingImage({
  containerClassName = '',
  className = '',
  onLoadingComplete,
  ...props
}) {
  const [loaded, setLoaded] = useState(false)
  const [showSkeleton, setShowSkeleton] = useState(true)

  useEffect(() => {
    if (!loaded) return
    const t = window.setTimeout(() => setShowSkeleton(false), 250)
    return () => window.clearTimeout(t)
  }, [loaded])

  return (
    <div className={`relative inline-block ${containerClassName}`}>
      <Image
        {...props}
        className={className}
        onLoadingComplete={(img) => {
          setLoaded(true)
          onLoadingComplete?.(img)
        }}
      />
      {showSkeleton && (
        <div
          aria-hidden="true"
          className={[
            'pointer-events-none absolute inset-0 rounded-[inherit]',
            'bg-gray-300/50 dark:bg-gray-700/40 overflow-hidden',
            'transition-opacity duration-300',
            loaded ? 'opacity-0' : 'opacity-100',
          ].join(' ')}
        >
          {!loaded && (
            <div
              className={[
                'absolute inset-0 -translate-x-full',
                'bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/20',
                'animate-[loading-shimmer_1.15s_ease-in-out_infinite]',
              ].join(' ')}
            />
          )}
        </div>
      )}
    </div>
  )
}

