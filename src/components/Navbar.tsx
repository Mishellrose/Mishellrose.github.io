import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { profile, navLinks } from '../lib/data'
import { handleNavClick } from '../lib/scroll'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') return

    const sections = [
      { id: 'home', label: 'Home' },
      { id: 'projects', label: 'Projects' },
      { id: 'resume', label: 'Resume' },
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        const match = sections.find((s) => s.id === visible.target.id)
        if (match) setActive(match.label)
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <nav
        className={`inline-flex items-center rounded-full border border-white/10 bg-surface px-2 py-2 backdrop-blur-md transition-shadow ${
          scrolled ? 'shadow-md shadow-black/10' : ''
        }`}
      >
        <Link
          to="/"
          className="group relative flex h-9 w-9 items-center justify-center"
          aria-label="Home"
        >
          <span className="accent-gradient absolute inset-0 rounded-full opacity-100 transition-all duration-300 group-hover:[background:linear-gradient(270deg,#89AACC_0%,#4E85BF_100%)]" />
          <span className="relative flex h-[calc(100%-4px)] w-[calc(100%-4px)] items-center justify-center rounded-full bg-bg transition-transform duration-300 group-hover:scale-110">
            <span className="font-display text-[13px] italic text-text-primary">
              {profile.initials}
            </span>
          </span>
        </Link>

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        <div className="flex items-center">
          {navLinks.map((link) => {
            const isActive = active === link.label && location.pathname === '/'
            return (
              <a
                key={link.label}
                href={location.pathname === '/' ? link.href : `/#${link.href.slice(1)}`}
                onClick={(e) => {
                  if (location.pathname === '/') {
                    handleNavClick(e, link.href)
                    setActive(link.label)
                  }
                }}
                className={`rounded-full px-3 py-1.5 text-xs transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                  isActive
                    ? 'bg-stroke/50 text-text-primary'
                    : 'text-muted hover:bg-stroke/50 hover:text-text-primary'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        <a
          href={location.pathname === '/' ? '#contact' : '/#contact'}
          onClick={(e) => {
            if (location.pathname === '/') handleNavClick(e, '#contact')
          }}
          className="group relative ml-1 overflow-hidden rounded-full"
        >
          <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 text-xs text-muted backdrop-blur-md transition-colors group-hover:text-text-primary sm:px-4 sm:py-2 sm:text-sm">
            Say hi <span aria-hidden>↗</span>
          </span>
        </a>
      </nav>
    </header>
  )
}
