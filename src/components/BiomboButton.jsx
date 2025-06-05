import biombo from '../assets/biombo.png'

function BiomboButton ({onClick}) {
    return (
        <div className="biombo-button-container">
            <button className="biombo-button" onClick={onClick} >
                <img src={biombo} alt="biombo button" className="biombo-button-img" />
                <span className="tooltip-text">View projects</span>
            </button>
        </div>
    )
}

export default BiomboButton