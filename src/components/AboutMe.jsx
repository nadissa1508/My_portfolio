import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import wallpaper from '../assets/wallpaper2.png'
import myPhoto from '../assets/myPhoto.jpg'
import petal from '../assets/petal1.png';

function AboutMe (){
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' }) 

    const handleDownloadCV = () => {
        const link = document.createElement('a')
        link.href = '/cv_2025_angie_vela.pdf'
        link.download = 'cv_2025_angie_vela.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <motion.div 
            id="about-me" 
            ref={ref}
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="about-me-container" 
            style={{ backgroundImage: `url(${wallpaper})` }}
        >
            <div className="petals-container">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className={`petal-orbit orbit-${i}`}>
                    <img src={petal} className="sakura-petal" alt="Sakura Petal" />
                    </div>
                ))}
            </div>
            <img src={myPhoto} alt="My professional photo" className="my-photo" />
            <div className='text-container-about-me'>
                <h1 className="title">About me</h1>
                <p>
                    I am a third-year student at Universidad del Valle de Guatemala, currently pursuing a degree in 
                    Computer Science and Information Technology Engineering. I am an enthusiastic and proactive individual  
                    with a passion for solving problems through technology. While I do not yet have formal professional 
                    experience, this portfolio showcases several projects I have completed throughout my studies 
                    and in collaboration with the university. 
                </p>
                <button className="about-me-btn-cv" onClick={handleDownloadCV}> 
                    Download CV
                </button>
            </div>
        </motion.div>
    )
}

export default AboutMe