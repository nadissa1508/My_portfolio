import { Typewriter } from 'react-simple-typewriter'
import wallpaper from '../assets/wallpaper.jpg'; 
import LampButton from './LampButton'
import Header from './Header'

function Presentation () {
    return (
        <div className='presentation-wrapper'>
            <div className="presentation-container" style={{ backgroundImage: `url(${wallpaper})` }}>
                <Header />
                <div className="presentation-text-container">
                    <h1 className="presentation-h1">
                        <Typewriter
                            words={["Hello World! I'm Nadissa"]}
                            loop={Infinity}
                            cursor
                            cursorStyle="_"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>
                    <h3 className="presentation-h3">
                        Full-Stack Developer and Database Lover
                    </h3>
                    <h3 className="presentation-h3">
                        Building solutions with code and data
                    </h3>
                </div>
                <div className="buttons-container">
                    <LampButton section="skills"/>
                    <LampButton section="projects"/>
                    <LampButton section="about-me"/>
                </div>
            </div>
        </div>
    )
}

export default Presentation