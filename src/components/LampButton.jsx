import lamp from "./assets/lamp"

function LampButton ({section}) {
    function goToSection () {

    }

    return (
        <div className="lamp-button-container">
            <button className="lamp-button" onClick={goToSection} >
                <img src={lamp} alt="lamp button" className="lamp-button" />
            </button>
        </div>
    )
}

export default LampButton