import skillLamp from '../assets/skills-lamp2.png'

function SkillIcon ({icon}) {
    return (
        <div className="skillicon-card" style={{ backgroundImage: `url(${skillLamp})` }} >
            <img src={icon} alt="icon skill" className="icon-skill" />
        </div>
    )
}

export default SkillIcon