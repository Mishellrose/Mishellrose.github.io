import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { profile } from '../lib/data'
import { useHlsVideo } from '../hooks/useHlsVideo'

const MARQUEE = 'BUILDING THE FUTURE • '

export function Contact() {
  const videoRef = useHlsVideo()
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = marqueeRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.to(el, {
        xPercent: -50,
        duration: 40,
        ease: 'none',
        repeat: -1,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-bg pb-8 pt-16 md:pb-12 md:pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-y-[-1] object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-bg to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10 overflow-hidden py-10">
        <div
          ref={marqueeRef}
          className="flex w-max whitespace-nowrap font-display text-5xl italic text-text-primary/10 md:text-7xl lg:text-8xl"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>{MARQUEE}</span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center md:px-10 lg:px-16">
        <p className="mx-auto mb-8 max-w-lg text-sm text-muted md:text-base">
          Have a project in mind? I&apos;m always open to new ideas and
          collaborations.
        </p>

        <motion.a
          href={`mailto:${profile.email}`}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex overflow-hidden rounded-full"
        >
          <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative inline-flex items-center gap-2 rounded-full border-2 border-stroke bg-bg px-8 py-4 text-text-primary transition-colors group-hover:border-transparent">
            {profile.email} <span aria-hidden>↗</span>
          </span>
        </motion.a>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-stroke pt-8 md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                className="text-sm text-muted transition-all hover:-translate-y-0.5 hover:text-text-primary"
              >
                {social.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 text-sm text-muted">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            Available for projects
          </div>
        </div>
      </div>
    </section>
  )
}
