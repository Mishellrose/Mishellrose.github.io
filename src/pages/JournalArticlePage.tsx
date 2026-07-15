import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { journalEntries } from '../lib/data'

export function JournalArticlePage() {
  const { slug } = useParams()
  const entry = journalEntries.find((e) => e.slug === slug)

  if (!entry) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-bg px-6 pt-28">
        <div className="text-center">
          <h1 className="mb-4 text-3xl text-text-primary">Article not found</h1>
          <Link to="/journal" className="text-muted hover:text-text-primary">
            ← Back to journal
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-bg pb-24 pt-28">
      <article className="mx-auto max-w-[720px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link
            to="/journal"
            className="mb-8 inline-flex text-sm text-muted transition-colors hover:text-text-primary"
          >
            ← All thoughts
          </Link>

          <div className="mb-8 overflow-hidden rounded-3xl border border-stroke">
            <img
              src={entry.image}
              alt=""
              className="aspect-[16/9] w-full object-cover"
            />
          </div>

          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span>{entry.readTime}</span>
            <span className="h-1 w-1 rounded-full bg-muted" />
            <span>{entry.date}</span>
          </div>

          <h1 className="mb-6 font-display text-4xl italic leading-tight text-text-primary md:text-6xl">
            {entry.title}
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-muted">
            {entry.excerpt}
          </p>

          <div className="space-y-6 border-t border-stroke pt-10">
            {entry.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-muted md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </article>
    </main>
  )
}
