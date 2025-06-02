function ProjectCard ({title, description, textButton, linkWebPage, linkGithub, projectPhoto}) {
    
    return (
        <div className="projects-card">
            <div className='text-container'>
                <h1 className="project-title">{title}</h1>
                <p>
                    {description}
                </p>
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