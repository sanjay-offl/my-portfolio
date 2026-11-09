import Image from "next/image"
import Link from "next/link"
import { ArrowLink } from "@/components/arrow-link"
import { Container } from "@/components/grid-container"
import { LocalizedLink } from "@/components/localized-link"
import { books } from "@/lib/books"
import { type Locale } from "@/lib/i18n"
import { getStats } from "@/lib/site"

export async function ProofStats({ locale }: { locale: Locale }) {
  const stats = getStats(locale)

  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={
              "p-6 md:p-8 " +
              (i % 2 ? "border-l border-line " : "") +
              (i >= 2 ? "border-t border-line md:border-t-0 " : "") +
              (i > 0 ? "md:border-l md:border-line" : "")
            }
          >
            <p className="font-mono text-3xl tracking-tight text-accent md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export async function AboutSnippet({ locale }: { locale: Locale }) {
  return (
    <Container>
      <div className="grid grid-cols-1 border-y border-line lg:grid-cols-[0.7fr_1.3fr]">
        <div className="border-b border-line p-8 md:p-10 lg:border-b-0 lg:border-r">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            About
          </p>
          <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">
            Aspiring designer, builder, author.
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-6 p-8 md:p-10">
          <p className="max-w-2xl text-base leading-relaxed text-foreground/85">
            Aspiring Web Designer and B.E. Computer Science & Engineering
            student passionate about designing intuitive, user-centered digital
            experiences — from UI/UX design and frontend development to AI
            products and entrepreneurship.
          </p>
          <LocalizedLink href="/about" locale={locale} className="group w-fit">
            <ArrowLink>More about me</ArrowLink>
          </LocalizedLink>
        </div>
      </div>
    </Container>
  )
}

const leadershipCommunities = [
  {
    name: "AWS Student Builder Group",
    organization: "PPG Institute of Technology",
    role: "Organizer",
    status: "Selected",
    description:
      "Contributing to the AWS student ecosystem through cloud learning, technology initiatives, student engagement and developer community building.",
    href: "https://www.meetup.com/aws-sbg-at-ppg-institute-of-technology",
    logo: "/assets/community/aws-student-builder-group.png",
    logoAlt: "AWS Student Builder Group logo",
  },
  {
    name: "Kotlin User Group Coimbatore",
    organization: "Kotlin User Group Coimbatore",
    role: "Co-Organizer",
    description:
      "Helping build and grow the Kotlin developer community in Coimbatore through technical events, developer collaboration, knowledge sharing and ecosystem engagement.",
    href: "https://kotlincoimbatore.live/",
    logo: "/assets/community/kotlin-user-group-coimbatore.png",
    logoAlt: "Kotlin User Group Coimbatore logo",
  },
]

export async function LeadershipCommunity({ locale }: { locale: Locale }) {
  return (
    <Container>
      <div className="border-y border-line">
        <div className="border-b border-line p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Leadership & community
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl tracking-tight md:text-4xl">
            Building connected developer communities.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {leadershipCommunities.map((community, i) => (
            <article
              key={community.name}
              className={
                "group flex h-full flex-col p-8 transition-transform duration-200 hover:-translate-y-1 md:p-10 " +
                (i > 0 ? "border-t border-line md:border-l md:border-t-0" : "")
              }
            >
              <div className="flex items-center justify-between gap-4 pb-5">
                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-line bg-zinc-50/80 p-3 dark:bg-zinc-950/60">
                  <Image
                    src={community.logo}
                    alt={community.logoAlt}
                    width={112}
                    height={112}
                    className="h-full w-full object-contain"
                  />
                </div>
                {community.status ? (
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                    {community.status}
                  </span>
                ) : null}
              </div>

              <div className="mt-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {community.organization}
                </p>
                <h3 className="mt-3 text-2xl tracking-tight md:text-[2rem]">
                  {community.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  {community.role}
                </p>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {community.description}
              </p>

              <a
                href={community.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 self-start"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground">
                  Visit Community
                </span>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-line bg-zinc-100 text-base text-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:bg-zinc-900">
                  ↗
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </Container>
  )
}

export async function BooksPreview({ locale }: { locale: Locale }) {
  return (
    <Container>
      <div className="border-y border-line">
        <div className="border-b border-line p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Books
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl tracking-tight md:text-4xl">
            I also write books.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Writing at the intersection of memory, identity, and ideas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {books
            .filter((book) => book.slug !== "why-men-walk-so-far")
            .map((book, i) => (
              <div
                key={book.slug}
                className={
                  "p-8 md:p-10 " +
                  (i > 0 ? "border-t border-line md:border-l md:border-t-0" : "")
                }
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  {book.status}
                </p>
                <h3 className="mt-3 font-serif text-2xl tracking-tight md:text-3xl">
                  {book.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {book.availability}
                </p>
                <Link
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-block"
                >
                  <ArrowLink>{book.cta}</ArrowLink>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </Container>
  )
}

const hackathons = [
  {
    title: "GDG Coimbatore Hackathon 2026",
    detail: "Aug 8–9 · Built UrbanMind, an AI citizen grievance intelligence portal.",
  },
  {
    title: "IIT Bombay E-Summit 2025",
    detail: "I-Hack Finalist · Google AdMob Track.",
  },
  {
    title: "ODFE Hackathon",
    detail: "24-hour build · full-stack Cafe POS system.",
  },
  {
    title: "Odoo Hackathon",
    detail: "Ranked 61st nationally.",
  },
  {
    title: "GDG Coimbatore community events",
    detail: "Regular participant in community meetups and build sessions.",
  },
]

export async function HackathonsPreview({ locale }: { locale: Locale }) {
  return (
    <Container>
      <div className="border-y border-line">
        <div className="border-b border-line p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Hackathons & events
          </p>
          <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">
            Where I build.
          </h2>
        </div>
        <div className="divide-y divide-line">
          {hackathons.map((event) => (
            <div
              key={event.title}
              className="flex flex-col gap-1 p-8 md:flex-row md:items-baseline md:gap-8 md:p-10"
            >
              <h3 className="w-80 shrink-0 text-lg tracking-tight">{event.title}</h3>
              <p className="max-w-xl flex-1 text-sm leading-relaxed text-muted-foreground">
                {event.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

const skillGroups = [
  {
    name: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js 14", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "FastAPI", "Spring Boot", "Spring Security", "JWT"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "Prisma ORM", "Redis"],
  },
  {
    name: "AI / APIs",
    skills: ["Gemini 1.5 Flash", "Google AI APIs", "REST APIs"],
  },
  {
    name: "Infrastructure",
    skills: ["Vercel", "Netlify", "Docker (basic)"],
  },
  {
    name: "Hardware / IoT",
    skills: ["ESP32", "Arduino", "Solar Tech"],
  },
  {
    name: "Tools & other",
    skills: ["Git", "GitHub", "Figma", "Canva", "VS Code", "RBAC", "CI/CD basics"],
  },
]

export async function SkillsSection({ locale }: { locale: Locale }) {
  return (
    <Container>
      <div className="border-y border-line">
        <div className="border-b border-line p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Skills
          </p>
          <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">
            The stack I build with.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <div
              key={group.name}
              className={
                "p-8 md:p-10 " +
                (i % 2 ? "md:border-l md:border-line " : "") +
                (i >= 2 ? "border-t border-line" : "")
              }
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {group.name}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-line px-3 py-1.5 font-mono text-xs text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export async function ContactCta({ locale }: { locale: Locale }) {
  const contactLinks = [
    { label: "Connect on LinkedIn", href: "https://linkedin.com/in/sanjayoffl24" },
    { label: "Follow on Instagram", href: "https://instagram.com/sanjay.hq/" },
    { label: "Follow on GitHub", href: "https://github.com/sanjay-offl" },
  ]

  return (
    <Container>
      <div className="border-y border-line">
        <div className="p-8 text-center md:p-14">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Contact
          </p>
          <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">
            Let's build something.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {contactLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="inline-flex items-center border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export async function InstagramFollow({ locale }: { locale: Locale }) {
  return (
    <Container>
      <div className="border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr]">
          <div className="border-b border-line p-8 md:border-b-0 md:border-r md:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Follow along
            </p>
            <h2 className="mt-3 max-w-xl text-3xl tracking-tight md:text-4xl">
              See the demos, builds, and behind-the-scenes.
            </h2>
          </div>
          <div className="flex flex-col justify-center p-8 md:p-10">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Follow @sanjay.hq on Instagram and my YouTube channel for project
              demos, hackathon recaps, and build-in-public updates.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="https://instagram.com/sanjay.hq/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <ArrowLink>Follow me on Instagram</ArrowLink>
              </Link>
              <Link
                href="https://www.youtube.com/@sanjayoffl"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <ArrowLink>Watch on YouTube</ArrowLink>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
