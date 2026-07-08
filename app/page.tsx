import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CommandPalette from "@/components/CommandPalette";
import { ExternalIcon, StarIcon } from "@/components/icons";
import {
  profile,
  experiences,
  education,
  projects,
  publications,
  skills,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <CommandPalette />

      <main id="top" className="mx-auto max-w-3xl px-6 pt-32 sm:pt-40">
        {/* Hero */}
        <section className="mb-24">
          <Reveal>
            <h1 className="font-serif text-5xl font-semibold tracking-tight sm:text-6xl">
              {profile.name}
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              {profile.bio}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent inline-flex items-center gap-1"
              >
                GitHub <ExternalIcon className="h-3 w-3" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent inline-flex items-center gap-1"
              >
                LinkedIn <ExternalIcon className="h-3 w-3" />
              </a>
              <a href={profile.socials.email} className="link-accent inline-flex items-center gap-1">
                Email
              </a>
              <span className="text-muted-2">{profile.location}</span>
            </div>
          </Reveal>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-24 scroll-mt-24">
          <Reveal>
            <h2 className="section-label mb-8">Experience</h2>
          </Reveal>
          <div className="space-y-9">
            {experiences.map((exp, i) => (
              <Reveal key={exp.role + exp.company} delay={i * 80}>
                <div className="group grid gap-1 sm:grid-cols-[1fr] md:grid-cols-[8.5rem_1fr] md:gap-6">
                  <div className="order-2 text-xs text-muted-2 md:order-1 md:pt-1">
                    {exp.period}
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <span className="font-medium text-foreground">
                        {exp.role}
                      </span>
                      <span className="text-muted-2">·</span>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-accent inline-flex items-center gap-1"
                        >
                          {exp.company}
                          <ExternalIcon className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                      ) : (
                        <span className="text-accent">{exp.company}</span>
                      )}
                    </div>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                      {exp.description}
                    </p>
                    <p className="mt-1 text-xs text-muted-2">{exp.location}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-24 scroll-mt-24">
          <Reveal>
            <h2 className="section-label mb-8">Education</h2>
          </Reveal>
          <div className="space-y-6">
            {education.map((ed, i) => (
              <Reveal key={ed.degree} delay={i * 80}>
                <div className="grid gap-1 md:grid-cols-[8.5rem_1fr] md:gap-6">
                  <div className="order-2 text-xs text-muted-2 md:order-1 md:pt-1">
                    {ed.period}
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="font-medium text-foreground">{ed.degree}</div>
                    {ed.schoolUrl ? (
                      <a
                        href={ed.schoolUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-accent text-sm"
                      >
                        {ed.school}
                      </a>
                    ) : (
                      <span className="text-sm text-accent">{ed.school}</span>
                    )}
                    {ed.note && (
                      <span className="ml-2 text-xs text-muted-2">· {ed.note}</span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-24 scroll-mt-24">
          <Reveal>
            <h2 className="section-label mb-8">Projects</h2>
          </Reveal>
          <div className="space-y-8">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div className="group">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-medium text-foreground">{p.name}</h3>
                    {p.featured && (
                      <StarIcon className="h-3.5 w-3.5 text-accent" />
                    )}
                    <span className="flex items-center gap-2 text-muted-2">
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.name} on GitHub`}
                          className="transition-colors hover:text-accent"
                        >
                          <ExternalIcon className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{p.description}</p>
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs text-muted-2">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="mb-24 scroll-mt-24">
          <Reveal>
            <h2 className="section-label mb-8">Publications</h2>
          </Reveal>
          <div className="space-y-8">
            {publications.map((pub, i) => (
              <Reveal key={pub.title} delay={i * 80}>
                <div>
                  <h3 className="max-w-xl font-medium leading-snug text-foreground">
                    {pub.title}
                  </h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2 text-sm">
                    <span className="text-muted">{pub.venue}</span>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[11px] ${
                        pub.statusType === "published"
                          ? "border-accent/40 text-accent"
                          : "border-[var(--border)] text-muted-2"
                      }`}
                    >
                      {pub.status}
                    </span>
                  </div>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                    {pub.description}
                  </p>
                  <div className="mt-1.5 flex items-center gap-3 text-xs text-muted-2">
                    <span>{pub.date}</span>
                    {pub.paperUrl && (
                      <a
                        href={pub.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-accent inline-flex items-center gap-1"
                      >
                        View Paper <ExternalIcon className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-16 scroll-mt-24">
          <Reveal>
            <h2 className="section-label mb-8">Skills</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items], i) => (
              <Reveal key={group} delay={i * 60}>
                <div>
                  <div className="mb-2 text-xs font-medium text-foreground">
                    {group}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((it) => (
                      <span
                        key={it}
                        className="card rounded-full px-2.5 py-1 text-xs text-muted"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
