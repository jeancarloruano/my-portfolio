'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function LoadingImage({
  containerClassName = '',
  className = '',
  onLoadingComplete,
  priority,
  fetchPriority,
  /** Skip rectangular shimmer so alpha doesn’t show a box around transparent PNGs */
  transparentBackground = false,
  ...props
}) {
  const [loaded, setLoaded] = useState(false)
  const [showSkeleton, setShowSkeleton] = useState(true)

  useEffect(() => {
    if (transparentBackground) return
    if (!loaded) return
    const t = window.setTimeout(() => setShowSkeleton(false), 250)
    return () => window.clearTimeout(t)
  }, [loaded, transparentBackground])

  const imageClassName = [
    className,
    transparentBackground && 'transition-opacity duration-300',
    transparentBackground && (loaded ? 'opacity-100' : 'opacity-0'),
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={`relative inline-block ${containerClassName}`}>
      <Image
        {...props}
        priority={priority}
        fetchPriority={fetchPriority ?? (priority ? 'high' : undefined)}
        className={imageClassName}
        onLoadingComplete={(img) => {
          setLoaded(true)
          onLoadingComplete?.(img)
        }}
      />
      {!transparentBackground && showSkeleton && (
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

