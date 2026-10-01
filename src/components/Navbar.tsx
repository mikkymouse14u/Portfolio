import { useState } from 'react'

const links = [
  { href: '#home', label: 'home' },
  { href: '#projects', label: 'projects' },
  { href: '#about', label: 'about-me' },
  { href: '#contact', label: 'contacts' },
]

export default function Navbar() {
  const [active, setActive] = useState('#home')
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex h-[68px] max-w-[1100px] items-center justify-between px-6 md:px-8">
        <div className="flex items-center gap-2 font-mono text-[15px] font-bold">
          <div className="relative h-[18px] w-[18px]">
            <span className="absolute left-0 top-0 h-[11px] w-[11px] border-[1.6px] border-accent" />
            <span className="absolute bottom-0 right-0 h-[11px] w-[11px] bg-accent" />
          </div>
          Michael Tobi
        </div>

        <div className="hidden items-center gap-7 font-mono text-[13.5px] sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={active === link.href ? 'text-accent' : 'text-text-secondary hover:text-accent'}
            >
              <span className={active === link.href ? 'text-accent' : 'text-text-tertiary'}>#</span>
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="text-xl sm:hidden"
          aria-label="menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-4 border-t border-border px-6 py-4 font-mono text-sm sm:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActive(link.href)
                setOpen(false)
              }}
              className={active === link.href ? 'text-accent' : 'text-text-secondary'}
            >
              #{link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
