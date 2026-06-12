import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reserve', label: 'Reserve' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className={`font-display text-2xl font-700 tracking-wide ${
            scrolled ? 'text-olive-800' : 'text-cream'
          }`}
        >
          Olivea<span className="text-gold">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition hover:text-gold ${
                  scrolled ? 'text-olive-800' : 'text-cream'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#reserve" className="btn-primary !px-5 !py-2">
              Book a Table
            </a>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${scrolled ? 'text-olive-800' : 'text-cream'}`}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-olive-100 bg-cream md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-olive-800 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#reserve" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
                Book a Table
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
