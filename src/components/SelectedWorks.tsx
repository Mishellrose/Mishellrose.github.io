import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../lib/data'

const colSpans = ['md:col-span-7', 'md:col-span-5', 'md:col-span-12']

export function SelectedWorks() {
  return (
    <section id="projects" className="bg-bg py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.div
          className="mb-10 flex items-end justify-between gap-6 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-stroke" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted">
                Projects
              </span>
            </div>
            <h2 className="mb-3 text-3xl font-medium tracking-tight text-text-primary md:text-5xl">
              Featured <span className="font-display italic">projects</span>
            </h2>
            <p className="max-w-md text-sm text-muted md:text-base">
              A selection of backends I&apos;ve built — from geofenced matching
              to resort booking and ML detection.
            </p>
          </div>

          <Link
            to="/projects"
            className="group relative hidden overflow-hidden rounded-full md:inline-flex"
          >
            <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-stroke bg-bg px-5 py-2.5 text-sm text-text-primary transition-colors group-hover:border-transparent">
              View all projects <span aria-hidden>→</span>
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              className={colSpans[i]}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border border-stroke bg-surface p-6 transition-colors hover:border-transparent md:p-8"
              >
                <span className="accent-gradient absolute inset-[-1px] rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-surface" />

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 transition-opacity duration-500 group-hover:opacity-35`}
                />

                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {project.subtitle}
                  </p>
                  <h3 className="mt-3 font-display text-3xl italic text-text-primary md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted md:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex items-center justify-between gap-4">
                  <p className="text-xs text-muted">{project.stack}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-text-primary transition-transform group-hover:translate-x-1">
                    View <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
