import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa'
import { SiPostgresql } from 'react-icons/si'

function ProjectCard ({title, description, textButton, linkWebPage, linkGithub, projectPhoto, tec}) {
    const techIcons = {
        html: <FaHtml5 title="HTML5" className="tech-icon html" />,
        css: <FaCss3Alt title="CSS3" className="tech-icon css" />,
        javascript: <FaJsSquare title="JavaScript" className="tech-icon js" />,
        react: <FaReact title="React" className="tech-icon react" />,
        postgres: <SiPostgresql title="PostgreSQL" className="tech-icon postgres" />
    }

    return (
        <div className="projects-card">
            <div className='text-container'>
                <h1 className="project-title">{title}</h1>
                <p>
                    {description}
                </p>
                <div className="tech-list">
                    {tec?.map((tech, index) => (
                        <span key={index}>
                            {techIcons[tech]}
                        </span>
                    ))}
                </div>
                <a className="link-github" href={linkGithub}>View GitHub repository</a>
                <a className="open-project-btn" href={linkWebPage} > 
                    {textButton}
                </a>
            </div>
            <img src={projectPhoto} alt="Project photo" className="project-photo" />
        </div>
    )
}

export default ProjectCard