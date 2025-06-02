import LampButton from './LampButton'

//ver que agregar acá como mi presentacion
//decir que soy frontend y backend web developer
// quisiera ser dba, me encanta SQL y las bases de datos
// estudiante de ingenieria en ciencias de la computación

function Presentation () {
    return (
        <div className="presentation-container">
            <div className="presentation-text-container">
                <h1 className="presentation-h1">
                Hello World! I'm Nadissa
                </h1>
                <h3 className="presentation-h3">
                    Full Stack web developer, Computer Science student 
                </h3>
                <h3 className="presentation-h3">
                    and SQL enthusiastic
                </h3>
            </div>
            <div className="buttons-container">
                <LampButton section="about-me"/>
                <LampButton section="projects"/>
                <LampButton section="skills"/>
            </div>
        </div>
    )
}

export default Presentation