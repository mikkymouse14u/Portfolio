export default function Footer() {
  return (
    <footer className="mt-8 overflow-hidden rounded-t-lg border border-b-0 border-border">
      <div className="flex flex-col items-center gap-4 bg-panel px-6 py-6 sm:flex-row sm:justify-between md:px-8">
        <div>
          <p className="font-mono text-sm font-bold">Michael Tobi</p>
          <p className="text-xs text-text-tertiary">Full Stack Developer</p>
        </div>
        <div className="flex gap-4 text-text-secondary">
          <a href="https://github.com/mikkymouse14u" aria-label="GitHub" className="hover:text-accent">GitHub</a>
          <a href="#" aria-label="LinkedIn" className="hover:text-accent">LinkedIn</a>
          <a href="#" aria-label="Twitter" className="hover:text-accent">Twitter</a>
        </div>
      </div>

      {/* VS Code style status bar */}
      <div className="flex items-center gap-4 bg-accent px-4 py-1.5 font-mono text-[11px] text-[#1c1430] overflow-x-auto whitespace-nowrap">
        <span className="flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <circle cx="6" cy="6" r="2.5" />
            <circle cx="6" cy="18" r="2.5" />
            <circle cx="18" cy="12" r="2.5" />
            <path d="M6 8.5V15.5" />
            <path d="M8.5 12H15.5" />
          </svg>
          main
        </span>
        <span>TypeScript</span>
        <span>UTF-8</span>
        <span className="ml-auto">© 2026 Michael Tobi</span>
      </div>
    </footer>
  )
}