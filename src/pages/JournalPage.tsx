import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { journalEntries } from '../lib/data'

export function JournalPage() {
  return (
    <main className="min-h-screen bg-bg pb-24 pt-28">
      <div className="mx-auto max-w-[900px] px-6 md:px-10">
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
            Recent <span className="font-display italic">thoughts</span>
          </h1>
          <p className="mb-12 max-w-lg text-muted">
            Writing on APIs, auth, databases, and system design.
          </p>
        </motion.div>

        <div className="space-y-4">
          {journalEntries.map((entry, i) => (
            <motion.div
              key={entry.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/journal/${entry.slug}`}
                className="group flex items-center gap-5 rounded-3xl border border-stroke bg-surface/40 p-4 transition-colors hover:bg-surface"
              >
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-stroke transition-transform group-hover:scale-105">
                  <img
                    src={entry.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-medium text-text-primary transition-transform group-hover:translate-x-0.5 md:text-xl">
                    {entry.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted">
                    {entry.readTime} · {entry.date}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">
                    {entry.excerpt}
                  </p>
                </div>
                <span className="hidden shrink-0 text-text-primary sm:inline">
                  ↗
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
