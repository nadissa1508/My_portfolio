import wallpaper from '../assets/wallpaper2.jpg'
import myPhoto from '../assets/myPhoto.jpg'

function AboutMe (){
    const handleDownloadCV = () => {
        const link = document.createElement('a')
        link.href = '/cv_2025_angie_vela.pdf'
        link.download = 'cv_2025_angie_vela.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div id="about-me" className="about-me-container" style={{ backgroundImage: `url(${wallpaper})` }}>
            <img src={myPhoto} alt="My professional photo" className="my-photo" />
            <div className='text-container'>
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
        </div>
    )
}

export default AboutMe