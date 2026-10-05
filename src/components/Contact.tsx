import { profile } from '../data/portfolio'
import ContactForm from './ContactForm'

export default function Contact() {
  const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`

  return (
    <section id="contacto" aria-labelledby="titulo-contacto" className="scroll-mt-20 py-16 sm:py-20">
      <h2 id="titulo-contacto" className="text-3xl font-bold tracking-tight">
        Contacto
      </h2>
      <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
        Si tenés una oportunidad laboral o un proyecto en mente, escribime. Te respondo lo antes posible.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-700 px-6 py-3 font-medium text-white transition-colors hover:bg-green-800 sm:self-start"
          >
            Escribir por WhatsApp
            <span className="sr-only">(se abre en una pestaña nueva)</span>
          </a>

          <ul className="mt-4 flex flex-col gap-3 text-base">
            <li>
              <span className="block text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Email
              </span>
              <a href={`mailto:${profile.email}`} className="break-all text-teal-700 underline-offset-4 hover:underline dark:text-teal-300">
                {profile.email}
              </a>
            </li>
            <li>
              <span className="block text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                GitHub
              </span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-teal-700 underline-offset-4 hover:underline dark:text-teal-300"
              >
                github.com/I-Carignano<span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
            <li>
              <span className="block text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                LinkedIn
              </span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-teal-700 underline-offset-4 hover:underline dark:text-teal-300"
              >
                linkedin.com/in/ignacio-carignano<span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
