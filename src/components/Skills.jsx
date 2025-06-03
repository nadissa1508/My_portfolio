import SkillIcon from './SkilIcon'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import vue from '../assets/vue.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import c from '../assets/cplusplus.png'
import postgres from '../assets/postgres.png'
import mysql from '../assets/mysql.png'


function Skills () {
    return (
        <div id="skills" className="skills-container">
            <h1 className="section-title">My Skills</h1>
            <div className="skills-grid">
                <SkillIcon icon = {html}/>
                <SkillIcon icon = {css}/>
                <SkillIcon icon = {js}/>
                <SkillIcon icon = {react}/>
                <SkillIcon icon = {vue}/>
                <SkillIcon icon = {java}/>
                <SkillIcon icon = {python}/>
                <SkillIcon icon = {c}/>
                <SkillIcon icon = {postgres}/>
                <SkillIcon icon = {mysql}/>
            </div>
        </div>
    )
}

export default Skills