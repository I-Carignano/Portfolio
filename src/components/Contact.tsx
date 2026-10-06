import type { CSSProperties } from 'react'
import { profile } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import ContactForm from './ContactForm'
import Reveal from './Reveal'

const delay = (i: number) => ({ '--i': i }) as CSSProperties

const labelClass = 'block text-sm font-semibold uppercase tracking-wide text-ink-muted dark:text-ink-muted'
const linkClass = 'break-all text-accent-text underline-offset-4 hover:underline dark:text-accent-text'

export default function Contact() {
  const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="contacto" aria-labelledby="titulo-contacto" className="scroll-mt-24 py-16 sm:py-20">
      <Reveal>
        <h2 id="titulo-contacto" className="text-3xl font-bold tracking-tight">
          Contacto
        </h2>
        <p className="mt-3 max-w-2xl text-ink-muted">
          Si tenés una oportunidad laboral o un proyecto en mente, escribime. Te respondo lo antes posible.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div ref={ref} className={`reveal-group flex flex-col gap-4 ${visible ? 'is-visible' : ''}`}>
          <a
            style={delay(0)}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal-item inline-flex items-center justify-center gap-2 rounded-lg bg-green-700 px-6 py-3 font-medium text-white transition-colors hover:bg-green-800 sm:self-start"
          >
            Escribir por WhatsApp
            <span className="sr-only">(se abre en una pestaña nueva)</span>
          </a>

          <ul className="mt-4 flex flex-col gap-3 text-base">
            <li style={delay(1)} className="reveal-item">
              <span className={labelClass}>Email</span>
              <a href={`mailto:${profile.email}`} className={linkClass}>
                {profile.email}
              </a>
            </li>
            <li style={delay(2)} className="reveal-item">
              <span className={labelClass}>GitHub</span>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                github.com/I-Carignano<span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
            <li style={delay(3)} className="reveal-item">
              <span className={labelClass}>LinkedIn</span>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                linkedin.com/in/ignacio-carignano<span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
          </ul>
        </div>

        <Reveal delay={200}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
