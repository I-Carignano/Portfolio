import type { Theme } from '../hooks/useTheme'

type Props = {
  theme: Theme
  onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: Props) {
  const isDark = theme === 'dark'
  const label = isDark ? 'Activar modo claro' : 'Activar modo oscuro'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-colors hover:bg-slate-200 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      {isDark ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  )
}
