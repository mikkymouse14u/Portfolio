export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-16">
      <div className="mb-9 flex items-baseline justify-between">
        <h2 className="font-mono text-[22px] text-accent">
          <span className="text-text-tertiary">/</span>contacts
        </h2>
        <span className="font-mono text-[13px] text-text-secondary">
          Get in touch
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="rounded-lg border border-border p-6">
          <h4 className="mb-4 font-mono text-[13px] text-text-tertiary">
            Message me here
          </h4>
          <a
            href="mailto:Mdosch7@gmail.com"
            className="mb-2.5 block font-mono text-sm hover:text-accent"
          >
            Mdosch7@gmail.com
          </a>
          <a
            href="https://github.com/mikkymouse14u"
            className="block font-mono text-sm hover:text-accent"
          >
            github.com/mikkymouse14u
          </a>
        </div>

        <div className="rounded-lg border border-border p-6">
          <h4 className="mb-4 font-mono text-[13px] text-text-tertiary">
            Availability
          </h4>
          <p className="mb-2.5 font-mono text-sm">
            Open to freelance & junior roles
          </p>
          <p className="font-mono text-sm">Based remotely</p>
        </div>
      </div>
    </section>
  );
}
