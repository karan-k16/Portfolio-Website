import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CommandPalette from "@/components/CommandPalette";
import CompanyLogo from "@/components/CompanyLogo";
import {
  ExternalIcon,
  StarIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";
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

      <main id="top" className="relative z-10 mx-auto max-w-5xl px-6 pt-32 sm:pt-40">
        {/* Hero */}
        <section className="mb-24 sm:mb-28">
          <div className="grid items-end gap-6 md:grid-cols-[1.1fr_1fr] md:gap-12">
            <Reveal>
              <h1 className="font-serif text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
                {profile.name}
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-lg leading-relaxed text-muted">{profile.bio}</p>
            </Reveal>
          </div>
          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted transition-colors hover:text-accent"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted transition-colors hover:text-accent"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.socials.email}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="text-muted transition-colors hover:text-accent"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="mb-20 grid scroll-mt-28 gap-5 md:grid-cols-[10rem_1fr] md:gap-12"
        >
          <Reveal>
            <h2 className="section-label md:sticky md:top-28">Experience</h2>
          </Reveal>
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <Reveal key={exp.role + exp.company} delay={i * 80}>
                <div className="group flex items-start gap-5 sm:gap-6">
                  <CompanyLogo company={exp.logo} />
                  <div className="min-w-0 flex-1 pt-0.5">
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <div className="flex flex-wrap items-baseline gap-x-2 text-[17px]">
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
                      {exp.lab &&
                        (exp.labUrl ? (
                          <a
                            href={exp.labUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 self-center text-[13px] text-muted-2 transition-colors hover:text-accent"
                          >
                            <ExternalIcon className="h-3 w-3" />
                            {exp.lab}
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1 self-center text-[13px] text-muted-2">
                            <ExternalIcon className="h-3 w-3" />
                            {exp.lab}
                          </span>
                        ))}
                    </div>
                    <div className="whitespace-nowrap text-[14px] text-muted-2 sm:pt-1">
                      {exp.period}
                    </div>
                  </div>
                  <p className="mt-1.5 text-base leading-relaxed text-muted">
                    {exp.description}
                  </p>
                  <p className="mt-1 text-[14px] text-muted-2">{exp.location}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Education */}
        <section
          id="education"
          className="mb-20 grid scroll-mt-28 gap-5 md:grid-cols-[10rem_1fr] md:gap-12"
        >
          <Reveal>
            <h2 className="section-label md:sticky md:top-28">Education</h2>
          </Reveal>
          <div className="space-y-6">
            {education.map((ed, i) => (
              <Reveal key={ed.degree} delay={i * 80}>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div>
                    <div className="text-[17px] font-medium text-foreground">
                      {ed.degree}
                    </div>
                    {ed.schoolUrl ? (
                      <a
                        href={ed.schoolUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-accent text-[15px]"
                      >
                        {ed.school}
                      </a>
                    ) : (
                      <span className="text-[15px] text-accent">{ed.school}</span>
                    )}
                    {ed.note && (
                      <span className="ml-2 text-[13px] text-muted-2">
                        · {ed.note}
                      </span>
                    )}
                  </div>
                  <div className="whitespace-nowrap text-[14px] text-muted-2 sm:pt-1">
                    {ed.period}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="mb-20 grid scroll-mt-28 gap-5 md:grid-cols-[10rem_1fr] md:gap-12"
        >
          <Reveal>
            <h2 className="section-label md:sticky md:top-28">Projects</h2>
          </Reveal>
          <div className="space-y-8">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div className="group h-full">
                  <div className="leading-snug">
                    <h3 className="inline align-middle text-[17px] font-medium text-foreground">
                      {p.name}
                    </h3>
                    {p.featured && (
                      <StarIcon className="ml-2 inline-block h-4 w-4 align-middle text-accent" />
                    )}
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.name} on GitHub`}
                        className="ml-2 inline-block align-middle text-muted-2 transition-colors hover:text-accent"
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>
                    )}
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.name} live`}
                        className="ml-1.5 inline-block align-middle text-muted-2 transition-colors hover:text-accent"
                      >
                        <ExternalIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <p className="mt-1.5 text-base text-muted">{p.description}</p>
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[14px] text-muted-2">
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
        <section
          id="publications"
          className="mb-20 grid scroll-mt-28 gap-5 md:grid-cols-[10rem_1fr] md:gap-12"
        >
          <Reveal>
            <h2 className="section-label md:sticky md:top-28">Publications</h2>
          </Reveal>
          <div className="space-y-8">
            {publications.map((pub, i) => (
              <Reveal key={pub.title} delay={i * 80}>
                <div>
                  <h3 className="text-[17px] font-medium leading-snug text-foreground">
                    {pub.title}
                  </h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[15px]">
                    <span className="text-muted">{pub.venue}</span>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[12px] ${
                        pub.statusType === "published"
                          ? "border-accent/40 text-accent"
                          : "border-orange-400/40 text-orange-400"
                      }`}
                    >
                      {pub.status}
                    </span>
                  </div>
                  <p className="mt-1.5 text-base leading-relaxed text-muted">
                    {pub.description}
                  </p>
                  <div className="mt-1.5 flex items-center gap-3 text-[13px] text-muted-2">
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
        <section
          id="skills"
          className="mb-16 grid scroll-mt-28 gap-5 md:grid-cols-[10rem_1fr] md:gap-12"
        >
          <Reveal>
            <h2 className="section-label md:sticky md:top-28">Skills</h2>
          </Reveal>
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items], i) => (
              <Reveal key={group} delay={i * 60}>
                <div>
                  <div className="mb-2 text-[14px] font-medium text-foreground">
                    {group}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((it) => (
                      <span
                        key={it}
                        className="card rounded-full px-2.5 py-1 text-[13px] text-muted"
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
