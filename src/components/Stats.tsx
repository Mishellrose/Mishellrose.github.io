import { motion } from 'framer-motion'
import { education, experience, skills, stats } from '../lib/data'
import { Portrait } from './Portrait'

export function Stats() {
  return (
    <section id="stats" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-stroke" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              Stats & Facts
            </span>
          </div>
          <h2 className="mb-3 text-3xl font-medium tracking-tight text-text-primary md:text-5xl">
            Making an <span className="font-display italic">impact</span>
          </h2>
          <p className="max-w-xl text-sm text-muted md:text-base">
            From production FastAPI systems to secure auth flows — focused on
            clean architecture and reliable backend engineering.
          </p>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
            >
              <p className="text-6xl font-medium tracking-tighter text-text-primary sm:text-7xl md:text-8xl lg:text-9xl">
                {stat.number}
              </p>
              <div className="my-5 h-px bg-stroke" />
              <p className="text-xl font-bold text-text-primary md:text-2xl">
                {stat.label}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Resume() {
  return (
    <section id="resume" className="border-t border-stroke bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.div
          className="mb-12 grid items-center gap-8 md:mb-16 md:grid-cols-[1fr_240px] md:items-end md:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-stroke" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted">
                Resume
              </span>
            </div>
            <h2 className="mb-3 text-3xl font-medium tracking-tight text-text-primary md:text-5xl">
              Experience & <span className="font-display italic">education</span>
            </h2>
            <p className="max-w-xl text-sm text-muted md:text-base">
              Backend-focused path across support engineering, internships, and
              production API systems.
            </p>
          </div>

          <div className="justify-self-start md:justify-self-end">
            <Portrait />
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.article
                key={job.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-l border-stroke pl-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  {job.period}
                </p>
                <h3 className="mt-2 text-xl font-medium text-text-primary md:text-2xl">
                  {job.role}
                </h3>
                <p className="mt-1 font-display italic text-muted">{job.company}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l border-stroke pl-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Education
              </p>
              <h3 className="mt-2 text-xl font-medium text-text-primary md:text-2xl">
                {education.degree}
              </h3>
              <p className="mt-1 font-display italic text-muted">
                {education.school}
              </p>
              <p className="mt-2 text-sm text-muted">{education.details}</p>
            </motion.article>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-stroke bg-surface/40 p-6 md:p-8"
          >
            <h3 className="mb-6 text-lg font-medium text-text-primary">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-stroke bg-bg px-3 py-1.5 text-sm text-text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
