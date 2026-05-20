import { useCallback, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

function useCountUp(target, duration = 1400) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  const start = useCallback(() => {
    if (started.current) return
    started.current = true
    const startTime = performance.now()
    function tick(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(easeOutCubic(progress) * target))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(target)
    }
    requestAnimationFrame(tick)
  }, [target, duration])

  return [count, start]
}

function StatItem({ stat, language }) {
  const [count, start] = useCountUp(stat.value)
  const label = stat.label[language] ?? stat.label.en

  return (
    <motion.div
      className="stats-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onViewportEnter={start}
    >
      <span className="stats-number">
        {count}{stat.suffix}
      </span>
      <span className="stats-label">{label}</span>
    </motion.div>
  )
}

export default function StatsCounter({ stats, language }) {
  return (
    <div className="stats-strip">
      {stats.map((stat, i) => (
        <StatItem key={i} stat={stat} language={language} />
      ))}
    </div>
  )
}
