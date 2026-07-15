import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { journalEntries } from '../lib/data'

export function Journal() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
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
                Journal
              </span>
            </div>
            <h2 className="mb-3 text-3xl font-medium tracking-tight text-text-primary md:text-5xl">
              Recent <span className="font-display italic">thoughts</span>
            </h2>
            <p className="max-w-md text-sm text-muted md:text-base">
              Notes on backend engineering, realtime systems, and clean API
              design.
            </p>
          </div>

          <Link
            to="/journal"
            className="group relative hidden overflow-hidden rounded-full md:inline-flex"
          >
            <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-stroke bg-bg px-5 py-2.5 text-sm text-text-primary transition-colors group-hover:border-transparent">
              View all <span aria-hidden>→</span>
            </span>
          </Link>
        </motion.div>

        <div className="flex flex-col gap-4">
          {journalEntries.map((entry, i) => (
            <motion.div
              key={entry.slug}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <Link
                to={`/journal/${entry.slug}`}
                className="group flex flex-col items-start gap-4 rounded-[40px] border border-stroke bg-surface/30 p-4 transition-colors hover:bg-surface sm:flex-row sm:items-center sm:gap-6 sm:rounded-full"
              >
                <div className="h-[100px] w-[100px] shrink-0 overflow-hidden rounded-full border border-stroke transition-all duration-500 group-hover:scale-110 group-hover:border-text-primary/30">
                  <img
                    src={entry.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="text-lg font-medium text-text-primary transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
                  {entry.title}
                </h3>

                <div className="hidden flex-grow sm:block">
                  <div
                    className="h-px w-full bg-stroke/30"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(90deg, hsl(var(--stroke)) 0, hsl(var(--stroke)) 4px, transparent 4px, transparent 8px)',
                      backgroundColor: 'transparent',
                      height: 1,
                    }}
                  />
                </div>

                <div className="flex items-center gap-2 text-sm text-muted sm:shrink-0">
                  <span>{entry.readTime}</span>
                  <span className="h-1 w-1 rounded-full bg-muted" />
                  <span>{entry.date}</span>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stroke text-text-primary transition-colors group-hover:bg-text-primary group-hover:text-bg">
                  <span aria-hidden>↗</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
