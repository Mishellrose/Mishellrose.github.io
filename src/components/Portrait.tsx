import { motion } from 'framer-motion'
import mishePortrait from '../assets/mishe.png'

type PortraitProps = {
  className?: string
}

export function Portrait({ className = '' }: PortraitProps) {
  return (
    <motion.div
      className={`relative w-full max-w-[240px] ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="accent-gradient absolute -inset-[2px] rounded-[2rem] opacity-60" />
      <div className="relative overflow-hidden rounded-[2rem] bg-surface">
        <img
          src={mishePortrait}
          alt="Mishell Rose Mathew"
          className="aspect-[3/4] w-full object-cover object-top"
        />
      </div>
    </motion.div>
  )
}
