import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

function ProjectSlider({ isOpen, onClose, projects }) {
  if (!isOpen) return null

  return (
    <motion.div 
      className="project-slider-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="project-slider"
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        exit={{ y: '100vh' }}
        transition={{ type: 'spring', damping: 25 }}
      >
        <button className="close-btn" onClick={onClose}>✕</button>
        <div className="slider-content">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectSlider
