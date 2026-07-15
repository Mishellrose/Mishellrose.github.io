import type { MouseEvent } from 'react'

export function scrollToId(id: string) {
  const el = document.getElementById(id.replace('#', ''))
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function handleNavClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (!href.startsWith('#')) return
  event.preventDefault()
  scrollToId(href)
}
