import { projects } from '../data/portfolio'
import type { Project } from '../data/portfolio'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologías usadas">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-800 dark:bg-teal-400/10 dark:text-teal-200"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-700 underline-offset-4 hover:underline dark:text-teal-300"
        >
          Ver repositorio<span className="sr-only"> de {project.title} (se abre en una pestaña nueva)</span>
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline-offset-4 hover:underline dark:text-teal-300"
          >
            Ver demo<span className="sr-only"> de {project.title} (se abre en una pestaña nueva)</span>
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" aria-labelledby="titulo-proyectos" className="scroll-mt-20 py-16 sm:py-20">
      <h2 id="titulo-proyectos" className="text-3xl font-bold tracking-tight">
        Proyectos
      </h2>
      <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
        Trabajos de la facultad y proyectos personales. Cada uno enlaza a su código o a una demo publicada.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
