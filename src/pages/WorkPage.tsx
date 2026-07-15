import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../lib/data'

export function WorkPage() {
  return (
    <main className="min-h-screen bg-bg pb-24 pt-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link
            to="/"
            className="mb-8 inline-flex text-sm text-muted transition-colors hover:text-text-primary"
          >
            ← Back home
          </Link>
          <h1 className="mb-3 text-4xl font-medium tracking-tight text-text-primary md:text-6xl">
            All <span className="font-display italic">projects</span>
          </h1>
          <p className="mb-12 max-w-lg text-muted">
            Backend systems for realtime products, analytics platforms, and ML
            services.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border border-stroke bg-surface p-6"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 transition-opacity group-hover:opacity-35`}
                />
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {project.stack}
                  </p>
                  <h2 className="mt-3 font-display text-3xl italic text-text-primary">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted">{project.description}</p>
                </div>
                <span className="relative z-10 mt-6 inline-flex text-sm text-text-primary transition-transform group-hover:translate-x-1">
                  View →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
