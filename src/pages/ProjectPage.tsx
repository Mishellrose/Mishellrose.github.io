import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../lib/data'

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-bg px-6 pt-28">
        <div className="text-center">
          <h1 className="mb-4 text-3xl text-text-primary">Project not found</h1>
          <Link to="/projects" className="text-muted hover:text-text-primary">
            ← Back to projects
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-bg pb-24 pt-28">
      <div className="mx-auto max-w-[900px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link
            to="/projects"
            className="mb-8 inline-flex text-sm text-muted transition-colors hover:text-text-primary"
          >
            ← All projects
          </Link>

          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted">
            {project.subtitle}
          </p>
          <h1 className="mb-4 font-display text-5xl italic text-text-primary md:text-7xl">
            {project.title}
          </h1>
          <p className="mb-8 text-sm text-muted md:text-base">{project.stack}</p>

          <div
            className={`mb-10 h-40 rounded-3xl border border-stroke bg-gradient-to-br ${project.gradient} opacity-50`}
          />

          <p className="mb-8 text-base leading-relaxed text-muted md:text-lg">
            {project.description}
          </p>

          <ul className="space-y-4">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="border-l border-stroke pl-4 text-sm leading-relaxed text-muted md:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </main>
  )
}
