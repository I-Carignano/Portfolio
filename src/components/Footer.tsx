import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:px-6 dark:text-slate-400">
        <p>
          © {year} {profile.name}. Diseñado y desarrollado con React y Tailwind CSS.
        </p>
        <nav aria-label="Redes">
          <ul className="flex gap-5">
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-700 hover:underline dark:hover:text-teal-300">
                GitHub<span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-700 hover:underline dark:hover:text-teal-300">
                LinkedIn<span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
