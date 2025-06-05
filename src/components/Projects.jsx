import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import ecommerce from '../assets/ecommerce.gif'
import componentsStore from '../assets/componentsStore.png'
import patoCSS from '../assets/patoCSS.png'
import wallpaper from '../assets/wallpaper-projects.png'
import ProjectSlider from './ProjectSlider'
import BiomboButton from './BiomboButton'

function Projects () {  
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [showSlider, setShowSlider] = useState(false)

    const projectsData = [
    {
      title: "Experimenting with CSS",
      description: "This project allowed me to experiment with CSS by recreating an image-based design of my choice. Thanks to this exercise, I significantly improved my skills, and the process was highly enjoyable",
      textButton: "Go",
      linkWebPage: "http://awita.site/usuarios/vel23764/lab4/",
      linkGithub: "https://github.com/nadissa1508/lab4_AppsMoviles.git",
      projectPhoto: patoCSS
    },
    {
      title: "Skincare Ecommerce",
      description:"Project serving as a template for any business. In this case, it functions as an online store for Korean skincare products. It displays available products, recommendations, favorites, and star ratings for each item.", 
      textButton: "Go",
      linkWebPage: "https://skincare-ecommerce.netlify.app/",
      linkGithub: "https://github.com/nadissa1508/boutique_ecommerce.git",
      projectPhoto: ecommerce
    },
    {
      title: "Components Store",
      description: "System for managing an electronics components store. A scalable database structure was developed to support system growth. An ORM was used to communicate with the database, and it includes useful business reports such as: purchase reports, best-selling components, and top-performing salespeople.",  
      textButton: "Go",
      linkWebPage: "https://skincare-ecommerce.netlify.app/",
      linkGithub: "https://github.com/FelipeAP04/Proyecto_DB_4.git",
      projectPhoto: componentsStore
    }
  ]

    return (
        <motion.div  
            id="projects" 
            className="projects-container"
            ref={ref}
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ backgroundImage: `url(${wallpaper})` }}
        >
            <h1 className="section-title">My Projects</h1>
            <BiomboButton onClick={() => setShowSlider(true)} />
            <ProjectSlider isOpen={showSlider} onClose={() => setShowSlider(false)} projects={projectsData} />
        </motion.div >
    )
}

export default Projects