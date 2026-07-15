import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { profile } from '../lib/data'
import { useHlsVideo } from '../hooks/useHlsVideo'
import { scrollToId } from '../lib/scroll'

const ROLE_LINES = profile.roleLines

type HeroProps = {
  ready?: boolean
}

export function Hero({ ready = true }: HeroProps) {
  const videoRef = useHlsVideo()
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLE_LINES.length)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (!ready) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo(
        '.name-reveal',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 },
      ).fromTo(
        '.blur-in',
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1,
          stagger: 0.1,
          delay: 0.3,
        },
        '<',
      )
    })
    return () => ctx.revert()
  }, [ready])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <p className="blur-in mb-8 text-xs uppercase tracking-[0.3em] text-muted opacity-0">
          {profile.eyebrow}
        </p>

        <h1 className="name-reveal mb-6 font-display text-5xl italic leading-[0.9] tracking-tight text-text-primary opacity-0 sm:text-6xl md:text-8xl lg:text-9xl">
          {profile.name}
        </h1>

        <p className="blur-in mb-4 text-base text-muted opacity-0 md:text-lg">
          <span
            key={roleIndex}
            className="animate-role-fade-in inline-block font-display italic text-text-primary"
          >
            {ROLE_LINES[roleIndex]}
          </span>
        </p>

        <p className="blur-in mb-12 max-w-md text-sm text-muted opacity-0 md:text-base">
          {profile.description}
        </p>

        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-4 opacity-0">
          <button
            type="button"
            onClick={() => scrollToId('projects')}
            className="group relative overflow-hidden rounded-full text-sm transition-transform hover:scale-105"
          >
            <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative block rounded-full bg-text-primary px-7 py-3.5 text-bg transition-colors duration-300 group-hover:bg-bg group-hover:text-text-primary">
              See Projects
            </span>
          </button>

          <button
            type="button"
            onClick={() => scrollToId('contact')}
            className="group relative overflow-hidden rounded-full text-sm transition-transform hover:scale-105"
          >
            <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative block rounded-full border-2 border-stroke bg-bg px-7 py-3.5 text-text-primary transition-colors duration-300 group-hover:border-transparent">
              Reach out...
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">
          Scroll
        </span>
        <div className="relative h-10 w-px overflow-hidden bg-stroke">
          <span className="accent-gradient absolute inset-x-0 h-1/3 w-full animate-scroll-down" />
        </div>
      </div>
    </section>
  )
}
