import Navbar from './components/Navbar'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-teal-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="contenido" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-slate-600 dark:text-slate-300">Secciones en construcción.</p>
      </main>
    </>
  )
}
