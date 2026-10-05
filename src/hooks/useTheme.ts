import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'
const DARK_QUERY = '(prefers-color-scheme: dark)'

// index.html ya aplicó el tema inicial; acá solo lo leemos del <html>.
function readTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

// Solo existe si el usuario eligió un tema con el toggle.
function readSavedTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'dark' || value === 'light' ? value : null
  } catch {
    return null
  }
}

function saveTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Sin localStorage (modo privado, por ejemplo) el tema vale solo para esta visita.
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  // Sin preferencia guardada, seguimos los cambios del sistema operativo.
  useEffect(() => {
    const media = window.matchMedia(DARK_QUERY)
    const onSystemChange = () => {
      if (readSavedTheme()) return
      setTheme(media.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onSystemChange)
    return () => media.removeEventListener('change', onSystemChange)
  }, [])

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    saveTheme(next)
  }

  return { theme, toggleTheme }
}
