import lamp from '../assets/lamp2.png'

function LampButton ({section}) {
    function goToSection () {
        const element = document.getElementById(section)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const sectionNames = {
        'about-me': 'About me',
        'projects': 'Projects',
        'skills': 'My Skills'
    }

    return (
        <div className="lamp-button-container">
            <button className="lamp-button" onClick={goToSection} >
                <img src={lamp} alt="lamp button" className="lamp-button" />
                <span className="tooltip-text">{sectionNames[section]}</span>
            </button>
        </div>
    )
}

export default LampButton