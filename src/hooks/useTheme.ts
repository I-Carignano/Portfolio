import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

// El tema inicial ya fue aplicado en index.html; acá solo lo leemos del <html>.
function readTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Sin localStorage (modo privado, por ejemplo) el tema vale solo para esta visita.
    }
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
