import SkillIcon from "./SkilIcon"
import html from "./assets/html"
import css from "./assets/css"
import js from "./assets/js"
import react from "./assets/react"
import vue from "./assets/vue"
import java from "./assets/java"
import python from "./assets/python"
import c from "./assets/c++"
import postgres from "./assets/postgres"
import mysql from "./assets/mysql"


function Skills () {
    return (
        <div className="skills-container">
            <h1 className="title">My Skills</h1>
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
    )
}

export default Skills