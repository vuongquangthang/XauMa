import { useRef, useEffect, useCallback } from 'react'

interface FadingVideoProps {
  src: string | string[]
  className?: string
  style?: React.CSSProperties
  poster?: string
}

export default function FadingVideo({ src, className = '', style, poster }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sources = Array.isArray(src) ? src : [src]
  const srcIndexRef = useRef(0)
  const fadeRafRef = useRef<number>(0)

  const fadeTo = useCallback((video: HTMLVideoElement, targetOpacity: number, duration: number) => {
    cancelAnimationFrame(fadeRafRef.current)
    const start = performance.now()
    const startOpacity = parseFloat(video.style.opacity || '0')
    const delta = targetOpacity - startOpacity

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress
      video.style.opacity = String(startOpacity + delta * ease)
      if (progress < 1) fadeRafRef.current = requestAnimationFrame(tick)
    }
    fadeRafRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.style.opacity = '0'

    const handleLoaded = () => fadeTo(video, 1, 500)

    const handleTimeUpdate = () => {
      if (video.duration && video.duration - video.currentTime <= 0.6) {
        fadeTo(video, 0, 550)
      }
    }

    const handleEnded = () => {
      srcIndexRef.current = (srcIndexRef.current + 1) % sources.length
      video.src = sources[srcIndexRef.current]
      video.load()
      video.play().catch(() => {})
      fadeTo(video, 1, 500)
    }

    video.addEventListener('loadeddata', handleLoaded)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)
    video.play().catch(() => {})

    return () => {
      cancelAnimationFrame(fadeRafRef.current)
      video.removeEventListener('loadeddata', handleLoaded)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
    }
  }, [fadeTo, sources])

  return (
    <video
      ref={videoRef}
      src={sources[0]}
      poster={poster}
      className={className}
      style={{ opacity: 0, ...style }}
      autoPlay
      muted
      playsInline
      preload="auto"
    />
  )
}
