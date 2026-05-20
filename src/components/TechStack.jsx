import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
}
const pillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

export default function TechStackGrid({ techStack, language }) {
  return (
    <div className="techstack-section">
      {techStack.map((group, gi) => (
        <div key={gi} className="techstack-group">
          <div className="techstack-group-label">
            {group.group[language] ?? group.group.en}
          </div>
          <motion.div
            className="techstack-pills"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {group.items.map(item => (
              <motion.span
                key={item}
                className="techstack-pill"
                variants={pillVariants}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  )
}
