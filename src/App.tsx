import About from './components/About'
import Hero from './components/Hero'
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
      <main id="contenido" className="mx-auto max-w-6xl px-4 sm:px-6">
        <Hero />
        <About />
      </main>
    </>
  )
}
