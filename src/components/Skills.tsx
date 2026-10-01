interface SkillGroup {
  title: string
  items: string[]
  learning?: boolean
}

const groups: SkillGroup[] = [
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js', 'Express.js'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Vite'] },
  {
    title: 'Currently learning',
    items: ['Backend dev', 'REST APIs', 'Databases', 'Full-stack apps'],
    learning: true,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-16">
      <div className="mb-9">
        <h2 className="font-mono text-[22px] text-accent">
          <span className="text-text-tertiary">#</span>skills
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {groups.map((g) => (
          <div
            key={g.title}
            className={
              'rounded-md border p-4 ' +
              (g.learning ? 'border-accent-dim bg-accent/10' : 'border-border')
            }
          >
            <h4
              className={
                'mb-2.5 font-mono text-xs ' + (g.learning ? 'text-accent' : 'text-text-tertiary')
              }
            >
              {g.title}
            </h4>
            <ul className="space-y-1 text-[13.5px]">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
