import type { CSSProperties } from 'react'
import { about, profile } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import Reveal from './Reveal'

const delay = (i: number) => ({ '--i': i }) as CSSProperties

function SkillGroup({ category, items }: { category: string; items: string[] }) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className={`reveal-group ${visible ? 'is-visible' : ''}`}>
      <h3 style={delay(0)} className="reveal-item text-sm font-semibold uppercase tracking-wide text-ink-muted">
        {category}
      </h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item, index) => (
          <li
            key={item}
            style={delay(index + 1)}
            className="reveal-item rounded-full bg-surface-2 px-3 py-1 text-sm font-medium text-ink"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function About() {
  return (
    <section id="sobre-mi" aria-labelledby="titulo-sobre-mi" className="scroll-mt-24 py-16 sm:py-20">
      <Reveal>
        <h2 id="titulo-sobre-mi" className="text-3xl font-bold tracking-tight">
          Sobre mí
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div>
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-ink-muted">{about.bio}</p>
          </Reveal>
          <Reveal delay={200}>
            <a
              href={profile.cvUrl}
              download
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-accent px-5 py-2.5 font-medium text-accent-text transition-colors hover:bg-accent hover:text-on-accent dark:hover:bg-accent-strong"
            >
              Descargar CV (PDF)
            </a>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6">
          {about.skills.map((group) => (
            <SkillGroup key={group.category} category={group.category} items={group.items} />
          ))}
        </div>
      </div>
    </section>
  )
}
