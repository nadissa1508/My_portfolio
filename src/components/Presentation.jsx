import { Typewriter } from 'react-simple-typewriter'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import wallpaper from '../assets/wallpaper.jpg'; 
import LampButton from './LampButton'
import Header from './Header'
import PetalRain from './PetalRain';

function Presentation () {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: '-20% 0px -20% 0px' });

    return (
        <div className='presentation-wrapper' ref={sectionRef}>
            <div className="presentation-container" style={{ backgroundImage: `url(${wallpaper})` }}>
                <PetalRain isVisible={isInView} />
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