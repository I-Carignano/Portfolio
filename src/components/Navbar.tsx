import { useEffect, useState } from 'react'
import type { Theme } from '../hooks/useTheme'
import ThemeToggle from './ThemeToggle'

export const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
] as const

type Props = {
  theme: Theme
  onToggleTheme: () => void
}

export default function Navbar({ theme, onToggleTheme }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  // En mobile el menú es lateral: se cierra con Escape.
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" className="truncate font-semibold text-slate-900 dark:text-slate-100">
          Ignacio Carignano
        </a>

        {/* Barra superior: solo desktop */}
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-700 dark:text-slate-300 dark:hover:text-teal-300"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-colors hover:bg-slate-200 md:hidden dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="menu-lateral"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú lateral: solo mobile */}
      <div className={`fixed inset-0 z-50 md:hidden ${menuOpen ? '' : 'pointer-events-none'}`}>
        <button
          type="button"
          tabIndex={menuOpen ? 0 : -1}
          aria-label="Cerrar menú"
          onClick={closeMenu}
          className={`absolute inset-0 bg-slate-950/60 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
        />
        <aside
          id="menu-lateral"
          inert={!menuOpen}
          className={`absolute right-0 top-0 flex h-full w-72 max-w-[85vw] flex-col gap-6 bg-white p-6 shadow-xl transition-transform duration-300 dark:bg-slate-900 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Menú</p>
          <nav aria-label="Principal móvil">
            <ul className="flex flex-col gap-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={closeMenu}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </header>
  )
}
