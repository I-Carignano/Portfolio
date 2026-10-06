import type { CSSProperties } from 'react'
import { profile } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

// Entrada suave al cargar: los elementos del hero aparecen en escalera.
const delay = (i: number) => ({ '--i': i }) as CSSProperties

export default function Hero() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="inicio" aria-labelledby="titulo-principal" className="scroll-mt-24 py-16 sm:py-24">
      <div ref={ref} className={`reveal-group flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between ${visible ? 'is-visible' : ''}`}>
        <div className="max-w-xl text-center md:text-left">
          <p style={delay(0)} className="reveal-item text-sm font-semibold uppercase tracking-wider text-accent-text">
            {profile.role}
          </p>
          <h1 id="titulo-principal" style={delay(1)} className="reveal-item mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p style={delay(2)} className="reveal-item mt-5 text-lg leading-relaxed text-ink-muted">
            {profile.tagline}
          </p>

          <div style={delay(3)} className="reveal-item mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-medium text-on-accent transition-colors hover:bg-accent-strong"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3 font-medium text-ink transition-colors hover:bg-surface-2"
            >
              Contactarme
            </a>
          </div>
        </div>

        <img
          src={profile.avatar}
          alt={`Foto de ${profile.name}`}
          width={400}
          height={400}
          style={delay(4)}
          className="reveal-item h-48 w-48 rounded-full object-cover ring-4 ring-accent/20 sm:h-64 sm:w-64"
        />
      </div>
    </section>
  )
}
