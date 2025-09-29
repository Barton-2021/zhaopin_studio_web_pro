import { motion } from 'framer-motion'
import { FiChevronRight } from 'react-icons/fi'

export default function JobCard({ job, index = 0 }) {
  return (
    <motion.article
      className="job-card"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.15 * index }}
    >
      <div className="job-card-inner">
        <div className="job-head">
          <h3>{job.title}</h3>
          <FiChevronRight size={20} />
        </div>
        <p className="summary">{job.summary}</p>

        <ul className="bullets">
          {job.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <div className="actions">
          <a className="apply" href="#contact">扫码加微信投递简历</a>
        </div>
      </div>
    </motion.article>
  )
}
