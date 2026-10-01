export default function About() {
  return (
    <section id="about" className="border-t border-border py-16">
      <div className="mb-9 flex items-baseline justify-between">
        <h2 className="font-mono text-[22px] text-accent">
          <span className="text-text-tertiary">/</span>about-me
        </h2>
        <span className="font-mono text-[13px] text-text-secondary">Who am I?</span>
      </div>

      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-4 text-[14.5px] text-text-secondary">
          <p>Hello, I'm Michael!</p>
          <p>
            I'm a Full Stack Developer currently building my skills in modern web development.
            I've worked on responsive websites and web applications using technologies such as
            HTML, CSS, Tailwind CSS, JavaScript, React, and TypeScript.
          </p>
          <p>
            I enjoy turning designs into functional, responsive interfaces, and I'm continuing to
            expand my knowledge into backend development with Node.js and Express.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="h-[190px] w-[150px] rounded-[70px_70px_20px_20px] bg-gradient-to-b from-[#24242f] to-[#0f0f14]" />
        </div>
      </div>
    </section>
  )
}
