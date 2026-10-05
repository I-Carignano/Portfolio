import { about, profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="sobre-mi" aria-labelledby="titulo-sobre-mi" className="scroll-mt-20 py-16 sm:py-20">
      <h2 id="titulo-sobre-mi" className="text-3xl font-bold tracking-tight">
        Sobre mí
      </h2>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">{about.bio}</p>
          <a
            href={profile.cvUrl}
            download
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-teal-700 px-5 py-2.5 font-medium text-teal-700 transition-colors hover:bg-teal-700 hover:text-white dark:border-teal-300 dark:text-teal-300 dark:hover:bg-teal-300 dark:hover:text-slate-950"
          >
            Descargar CV (PDF)
          </a>
        </div>

        <div className="flex flex-col gap-6">
          {about.skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {group.category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
