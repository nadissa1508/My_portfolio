import ProjectCard from './ProjectCard'
import greenGuard from '../assets/greenGuard.png'
import ecommerce from '../assets/ecommerce.gif'
import componentsStore from '../assets/componentsStore.png'
import patoCSS from '../assets/patoCSS.png'

function Projects () {  
    const description = [
    "Sustainability-focused video game for children, designed to teach how to care for the environment in an interactive way. It encourages users to make decisions to protect their ecosystem, becoming their own 'Green Guard'.",  
    "Project serving as a template for any business. In this case, it functions as an online store for Korean skincare products. It displays available products, recommendations, favorites, and star ratings for each item.",  
    "System for managing an electronics components store. A scalable database structure was developed to support system growth. An ORM was used to communicate with the database, and it includes useful business reports such as: purchase reports, best-selling components, and top-performing salespeople.",  
    "This project allowed me to experiment with CSS by recreating an image-based design of my choice. Thanks to this exercise, I significantly improved my skills, and the process was highly enjoyable"
];

    return (
        <div id="projects" className="projects-container">
            <h1 className="section-title">My Projects</h1>
            <ProjectCard title="Experimenting with CSS" description={description[3]} textButton="Go" linkWebPage="http://awita.site/usuarios/vel23764/lab4/" linkGithub="https://github.com/nadissa1508/lab4_AppsMoviles.git" projectPhoto={patoCSS} />
            <ProjectCard title="Green Guard" description={description[0]} textButton="Go" linkWebPage="https://github.com/nadissa1508/Green_guard" linkGithub="https://github.com/nadissa1508/Green_guard" projectPhoto={greenGuard} />
            <ProjectCard title="Skincare Ecommerce" description={description[1]} textButton="Go" linkWebPage="https://skincare-ecommerce.netlify.app/" linkGithub="https://github.com/nadissa1508/boutique_ecommerce.git" projectPhoto={ecommerce} />
            <ProjectCard title="Components Store" description={description[2]} textButton="Go" linkWebPage="https://skincare-ecommerce.netlify.app/" linkGithub="https://github.com/FelipeAP04/Proyecto_DB_4.git" projectPhoto={componentsStore} />
        </div>
    )
}

export default Projects