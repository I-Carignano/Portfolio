import { useEffect, useRef, useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import type { Theme } from '../hooks/useTheme'
import ThemeToggle from './ThemeToggle'

export const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
] as const

const sectionIds = sections.map((section) => section.id)
const FOCUSABLE = 'a[href], button:not([disabled])'

type Props = {
  theme: Theme
  onToggleTheme: () => void
}

export default function Navbar({ theme, onToggleTheme }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLElement>(null)
  const wasOpen = useRef(false)

  const getFocusable = () =>
    Array.from(drawerRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? [])

  useEffect(() => {
    if (!menuOpen) {
      // Al cerrar, el foco vuelve al botón que abrió el menú. Va en el siguiente tick
      // porque al tocar un link el navegador termina la navegación por hash después del clic.
      if (wasOpen.current) window.setTimeout(() => menuButtonRef.current?.focus(), 0)
      wasOpen.current = false
      return
    }

    wasOpen.current = true
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    // Al abrir, el foco va al primer link del menú (el botón Cerrar queda antes en el DOM).
    drawerRef.current?.querySelector<HTMLElement>('nav a')?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        return
      }
      if (event.key !== 'Tab') return

      // Trampa de foco: Tab y Shift+Tab no salen del panel mientras está abierto.
      const items = getFocusable()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const linkClass = (id: string) =>
    `text-sm font-medium transition-colors hover:text-accent-text ${
      activeId === id
        ? 'text-accent-text underline underline-offset-8'
        : 'text-ink-muted'
    }`

  const mobileLinkClass = (id: string) =>
    `block rounded-lg px-3 py-3 text-base font-medium hover:bg-surface-2 ${
      activeId === id
        ? 'bg-accent-soft text-ink dark:bg-accent/10'
        : 'text-ink'
    }`

  return (
    <>
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 md:pt-4">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 rounded-2xl border border-line bg-surface/75 px-4 shadow-xl shadow-ink/10 backdrop-blur-[18px] backdrop-saturate-150 md:grid md:grid-cols-[1fr_auto_1fr] md:rounded-full md:pl-6 md:pr-2.5 dark:border-accent/15 dark:bg-surface/70 dark:shadow-black/40">
          <a href="#inicio" className="truncate font-semibold text-ink md:justify-self-start">
            Ignacio Carignano
          </a>

          {/* Barra superior: solo desktop */}
          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-6">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={activeId === section.id ? 'true' : undefined}
                    className={linkClass(section.id)}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 md:justify-self-end">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:bg-surface-2 md:hidden dark:text-ink"
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

    </header>

      {/* Menú lateral: solo mobile */}
      <div className={`fixed inset-0 z-50 overflow-hidden md:hidden ${menuOpen ? '' : 'pointer-events-none'}`}>
        {/* El overlay es solo para mouse: el teclado cierra con Escape o con el botón del panel. */}
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={closeMenu}
          className={`absolute inset-0 bg-[#121212]/60 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
        />
        <aside
          ref={drawerRef}
          id="menu-lateral"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          inert={!menuOpen}
          className={`absolute right-0 top-0 flex h-full w-72 max-w-[85vw] flex-col gap-6 bg-surface p-6 shadow-xl transition-transform duration-300 dark:bg-surface ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Menú</p>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Cerrar menú"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-muted hover:bg-surface-2 dark:text-ink"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav aria-label="Principal móvil">
            <ul className="flex flex-col gap-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={closeMenu}
                    aria-current={activeId === section.id ? 'true' : undefined}
                    className={mobileLinkClass(section.id)}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  )
}
