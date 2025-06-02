import myPhoto from './assets/myPhoto'

function AboutMe (){
    return (
        <div className="about-me-container">
            <img src={myPhoto} alt="My professional photo" className="my-photo" />
            <div className='text-container'>
                <h1 className="title">About me</h1>
                <p>
                    I am a third-year student at Universidad del Valle de Guatemala, currently pursuing a degree in <br />
                    Computer Science and Information Technology Engineering. I am an enthusiastic and proactive individual <br /> 
                    with a passion for solving problems through technology. While I do not yet have formal professional <br />
                    experience, this portfolio showcases several projects I have completed throughout my studies <br />
                    and in collaboration with the university. <br />
                </p>
                <button className="about-me-btn-cv"> 
                    Download CV
                </button>
            </div>
        </div>
    )
}

export default AboutMe