import { useEffect, useState } from 'react'

// Each line: the text to type, and whether it's a command (prefixed with $)
// or an output line (prefixed with >).
const lines = [
  { type: 'command', text: 'whoami' },
  { type: 'output', text: 'Michael Tobi — Full Stack Developer' },
  { type: 'command', text: 'cat status.txt' },
  { type: 'output', text: 'Building. Learning. Growing.' },
] as const

const TYPE_SPEED_MS = 28
const LINE_PAUSE_MS = 350

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [visibleChars, setVisibleChars] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    // Respect users who've asked their OS for reduced motion —
    // just show the final state instantly instead of animating.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setVisibleLines(lines.length)
      setDone(true)
      return
    }

    if (visibleLines >= lines.length) {
      setDone(true)
      return
    }

    const currentLine = lines[visibleLines].text

    if (visibleChars < currentLine.length) {
      const timeout = setTimeout(() => setVisibleChars((c) => c + 1), TYPE_SPEED_MS)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setVisibleLines((l) => l + 1)
      setVisibleChars(0)
    }, LINE_PAUSE_MS)
    return () => clearTimeout(timeout)
  }, [visibleChars, visibleLines])

  return (
    <div className="w-full max-w-[420px] overflow-hidden rounded-lg border border-border bg-[#0e0e13] shadow-2xl">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[11px] text-text-tertiary">michael@portfolio</span>
      </div>

      {/* body */}
      <div className="min-h-[150px] px-5 py-4 font-mono text-[13px] leading-relaxed">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i}>
            {line.type === 'command' ? (
              <span>
                <span className="text-accent">$ </span>
                <span className="text-text-primary">{line.text}</span>
              </span>
            ) : (
              <span className="text-[#7fd8c4]">{'> ' + line.text}</span>
            )}
          </div>
        ))}

        {!done && visibleLines < lines.length && (
          <div>
            {lines[visibleLines].type === 'command' ? (
              <span>
                <span className="text-accent">$ </span>
                <span className="text-text-primary">
                  {lines[visibleLines].text.slice(0, visibleChars)}
                </span>
              </span>
            ) : (
              <span className="text-[#7fd8c4]">
                {'> ' + lines[visibleLines].text.slice(0, visibleChars)}
              </span>
            )}
            <span className="ml-0.5 inline-block h-[14px] w-[7px] animate-pulse bg-accent align-middle" />
          </div>
        )}

        {done && (
          <div>
            <span className="text-accent">$ </span>
            <span className="ml-0.5 inline-block h-[14px] w-[7px] animate-pulse bg-accent align-middle" />
          </div>
        )}
      </div>
    </div>
  )
}