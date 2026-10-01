interface SkillBlock {
  key: string
  items: string[]
}

// Add/remove skills here — they render as JSON-style list items below.
const blocks: SkillBlock[] = [
  {
    key: 'dependencies',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    key: 'devDependencies',
    items: ['Node.js', 'Express.js', 'Git', 'GitHub', 'VS Code', 'Vite'],
  },
]

const learning = ['Backend dev', 'REST APIs', 'Databases', 'Full-stack apps']

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-16">
      <div className="mb-9">
        <h2 className="font-mono text-[22px] text-accent">
          <span className="text-text-tertiary">#</span>skills
        </h2>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-[#0e0e13]">
        <div className="flex items-center gap-2 border-b border-border px-5 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[11px] text-text-tertiary">package.json</span>
        </div>

        <div className="px-6 py-5 font-mono text-[13px] leading-[1.9] text-text-secondary">
          <div>{'{'}</div>
          {blocks.map((block, bi) => (
            <div key={block.key} className="pl-4">
              <div>
                <span className="text-accent">&quot;{block.key}&quot;</span>: [
              </div>
              {block.items.map((item, i) => (
                <div key={item} className="pl-4">
                  <span className="text-[#7fd8c4]">&quot;{item}&quot;</span>
                  {i < block.items.length - 1 && ','}
                </div>
              ))}
              <div>{bi < blocks.length - 1 ? '],' : ']'}</div>
            </div>
          ))}
          <div>{'}'}</div>

          <div className="mt-4 text-text-tertiary">
            <div>// currently learning</div>
            <div className="pl-4">// {learning.join(', ')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}