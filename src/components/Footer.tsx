export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between md:px-8">
        <div>
          <p className="font-mono text-sm font-bold">Michael Tobi</p>
          <p className="text-xs text-text-tertiary">Full Stack Developer</p>
        </div>
        <div className="flex gap-4 text-text-secondary">
          <a href="https://github.com/mikkymouse14u" aria-label="GitHub" className="hover:text-accent">GitHub</a>
          <a href="#" aria-label="Twitter" className="hover:text-accent">Twitter</a>
          <a href="#" aria-label="LinkedIn" className="hover:text-accent">LinkedIn</a> 
        </div>
      </div>
      <p className="mt-6 text-center font-mono text-xs text-text-tertiary">
        © 2026 Michael Tobi. Built with a lot of coffee.
      </p>
    </footer>
  )
}
