import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="titulo-principal" className="scroll-mt-20 py-16 sm:py-24">
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
        <div className="max-w-xl text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300">
            {profile.role}
          </p>
          <h1 id="titulo-principal" className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">{profile.tagline}</p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center rounded-lg bg-teal-700 px-6 py-3 font-medium text-white transition-colors hover:bg-teal-800 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-lg border border-slate-400 px-6 py-3 font-medium text-slate-800 transition-colors hover:bg-slate-200 dark:border-slate-500 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Contactarme
            </a>
          </div>
        </div>

        <img
          src={profile.avatar}
          alt={`Foto de ${profile.name}`}
          width={400}
          height={400}
          className="h-48 w-48 rounded-full object-cover ring-4 ring-teal-700/20 sm:h-64 sm:w-64 dark:ring-teal-300/20"
        />
      </div>
    </section>
  )
}
