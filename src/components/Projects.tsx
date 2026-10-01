interface Project {
  title: string;
  thumb: string;
  tech: string;
  description: string;
  status: "live" | "in-progress";
  live?: string;
  github?: string;
}

// Add more projects to this array as you build them.
const projects: Project[] = [
  {
    title: "worknest",
    thumb: "worknest",
    tech: "react, nextjs, tailwindcss, typescript",
    description:
      "A job application tracker built from a figma design, letting you log roles, locations, and job types and view details for each application.",
    status: "in-progress",
  },
  {
    title: "Fylo Landing Page",
    thumb: "Fylo",
    tech: "HTML · CSS",
    description:
      "A responsive landing page built from a design, focused on translating a UI design into a clean, fully responsive website.",
    status: "in-progress",
    live: "#",
    github: "#",
  },
  // Duplicate one of the blocks above for each new project.
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-16">
      <div className="mb-9 flex items-baseline justify-between">
        <h2 className="font-mono text-[22px] text-accent">
          <span className="text-text-tertiary">/</span>projects
        </h2>
        <span className="font-mono text-[13px] text-text-secondary">
          List of my projects
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className="flex flex-col overflow-hidden rounded-lg border border-border bg-panel"
          >
            <div className="flex h-[140px] items-center justify-center bg-gradient-to-br from-[#241a34] to-[#120c1c] font-mono text-xl font-bold tracking-wide text-accent">
              {p.thumb}
            </div>
            <div className="px-5 pt-3 font-mono text-[11.5px] text-text-tertiary">
              {p.tech}
            </div>
            <div className="flex items-center justify-between px-5 pt-3">
              <span className="font-mono text-[11.5px] text-text-tertiary">
                {p.tech}
              </span>
              {p.status === "in-progress" && (
                <span className="rounded border border-accent-dim bg-accent/10 px-2 py-0.5 font-mono text-[10.5px] text-accent">
                  In progress
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col px-5 pb-5 pt-1">
              <h3 className="mb-1.5 mt-1 text-base font-semibold">{p.title}</h3>
              <p className="mb-4 flex-1 text-[13.5px] text-text-secondary">
                {p.description}
              </p>
              {p.status === "live" ? (
                <div className="flex flex-wrap gap-2">
                  <a
                    href={p.live}
                    className="rounded border border-accent-dim px-3 py-1.5 font-mono text-xs text-accent"
                  >
                    Live ⇔
                  </a>
                  <a
                    href={p.github}
                    className="rounded border border-border px-3 py-1.5 font-mono text-xs text-text-secondary"
                  >
                    Github ⇔
                  </a>
                </div>
              ) : (
                <span className="font-mono text-xs text-text-tertiary">
                  Coming soon
                </span>
              )}
            </div>
          </div>
        ))}

        <div className="flex min-h-[180px] items-center justify-center rounded-lg border border-dashed border-border p-5 text-center font-mono text-sm text-text-tertiary">
          More projects coming soon
        </div>
      </div>
    </section>
  );
}
