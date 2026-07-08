import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export default function Footer() {
  const socials = [
    { href: profile.socials.github, label: "GitHub", icon: <GithubIcon className="h-[18px] w-[18px]" /> },
    { href: profile.socials.linkedin, label: "LinkedIn", icon: <LinkedinIcon className="h-[18px] w-[18px]" /> },
    { href: profile.socials.email, label: "Email", icon: <MailIcon className="h-[18px] w-[18px]" /> },
  ];

  return (
    <footer className="mx-auto max-w-3xl px-6 pb-16 pt-10">
      <div className="flex flex-col items-center gap-5 border-t border-[var(--border)] pt-8 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-muted transition-colors hover:text-accent"
            >
              {s.icon}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-2">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
