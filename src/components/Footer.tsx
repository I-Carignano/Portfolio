import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-ink-muted sm:flex-row sm:px-6">
        <p>
          © {year} {profile.name}. Diseñado y desarrollado con React y Tailwind CSS.
        </p>
        <nav aria-label="Redes">
          <ul className="flex gap-5">
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-text hover:underline">
                GitHub<span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent-text hover:underline">
                LinkedIn<span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
