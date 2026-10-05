import type { CSSProperties, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Props = {
  children: ReactNode
  // Retraso en milisegundos antes de que empiece la animación.
  delay?: number
  className?: string
}

// Elemento suelto que sube y aparece al entrar en pantalla (ver .reveal en index.css).
export default function Reveal({ children, delay = 0, className = '' }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
