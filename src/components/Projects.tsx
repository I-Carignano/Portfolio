import type { CSSProperties } from 'react'
import { projects } from '../data/portfolio'
import type { Project } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import Reveal from './Reveal'

function ProjectCard({ project, index, wide }: { project: Project; index: number; wide: boolean }) {
  return (
    <article
      style={{ '--i': index } as CSSProperties}
      className={`reveal-item flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm transition-transform duration-300 motion-safe:hover:-translate-y-1 dark:border-line dark:bg-surface ${wide ? 'md:col-span-2' : ''}`}
    >
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-ink-muted">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologías usadas">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-medium text-ink dark:bg-accent/10"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-text underline-offset-4 hover:underline"
          >
            Ver repositorio<span className="sr-only"> de {project.title} (se abre en una pestaña nueva)</span>
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-text underline-offset-4 hover:underline"
          >
            Ver demo<span className="sr-only"> de {project.title} (se abre en una pestaña nueva)</span>
          </a>
        )}
        {!project.repoUrl && <p className="text-xs font-normal text-ink-muted">Repositorio privado · proyecto comercial propio</p>}
      </div>
    </article>
  )
}

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="proyectos" aria-labelledby="titulo-proyectos" className="scroll-mt-24 py-16 sm:py-20">
      <Reveal>
        <h2 id="titulo-proyectos" className="text-3xl font-bold tracking-tight">
          Proyectos
        </h2>
        <p className="mt-3 max-w-2xl text-ink-muted">
          Trabajos de la facultad y proyectos personales. Cada uno enlaza a su código o a una demo publicada.
        </p>
      </Reveal>

      <div ref={ref} className={`reveal-group mt-10 grid gap-6 md:grid-cols-2 ${visible ? 'is-visible' : ''}`}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            wide={index === projects.length - 1 && projects.length % 2 === 1}
          />
        ))}
      </div>
    </section>
  )
}
