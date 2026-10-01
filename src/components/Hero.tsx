export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-8 md:pt-28">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 grid w-fit grid-cols-6 gap-1.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="h-[3px] w-[3px] rounded-full bg-border" />
            ))}
          </div>

          <h1 className="mb-5 font-mono text-[32px] font-bold leading-snug tracking-tight md:text-[40px]">
            Michael is a <span className="text-accent">Full Stack Developer</span> focused on
            building modern, responsive web apps
          </h1>

          <p className="mb-7 max-w-[46ch] text-[15.5px] text-text-secondary">
            I'm building my skills across the stack — turning designs into clean, responsive
            interfaces with React and TypeScript, and expanding into backend development with
            Node.js and Express.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded border border-accent-dim px-6 py-3 font-mono text-[13.5px] text-accent transition-colors hover:bg-accent hover:text-bg"
          >
            Contact me →
          </a>
        </div>

        <div className="relative flex h-[280px] items-center justify-center md:h-[320px]">
          <div className="absolute left-[-10px] top-5 h-[70px] w-[70px]">
            <span className="absolute h-11 w-11 border-[1.5px] border-accent opacity-55" />
            <span className="absolute left-[22px] top-[22px] h-[34px] w-[34px] border-[1.5px] border-accent bg-accent/15 opacity-55" />
          </div>
          <div className="relative h-[230px] w-[190px] rounded-[90px_90px_26px_26px] bg-gradient-to-b from-[#24242f] to-[#0f0f14] shadow-2xl">
            <div className="absolute left-1/2 top-[34px] h-20 w-20 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_40%_30%,#0d0d10,#000_75%)]" />
          </div>
        </div>
      </div>

      <div className="mt-[-32px] flex justify-center">
        <div className="flex items-center gap-2.5 rounded-md border border-border bg-panel px-4 py-3 font-mono text-[12.5px] text-text-secondary">
          <div className="h-2 w-2 shrink-0 bg-accent" />
          Currently building <span className="font-semibold text-white">this portfolio</span>
        </div>
      </div>
    </section>
  )
}
