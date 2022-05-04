import React, {useEffect, useState} from 'react'
import {Link, useLocation} from "react-router-dom"

import Projects from "./Projects"
import classes from './projectsList.module.css'

import rightArrow from '../../assets/shared/desktop/icon-right-arrow.svg'

const ProjectsList = () => {
  let location = useLocation()
  const [projectsDisplay, setProjectsDisplay] = useState([])

  useEffect(() => {
    setProjectsDisplay(
      Projects.filter(el => el.url !== location.pathname)
    )
  }, [location.pathname])

  return (
    <section
      className={
        location.pathname === '/homepage' ?
          `${classes['projects-wrapper']} ${classes['home']} content` :
          `${classes['projects-wrapper']} content`
      }
    >
      {projectsDisplay.map((el, index) => (
        <Link
          to={el.url}
          key={index}
          className={`${classes['project-card']} ${el.class}`}
        >
          <h3 className={`${classes['project-card__title']}`}>{el.title}</h3>
          <div className={`${classes['project-card__link']}`}>
            view projects
            <span style={{marginLeft: '16px'}}>
              <img src={rightArrow} alt="right arrow"/>
            </span>
          </div>
          <div className={`${classes['project-card__mask']}`}/>
        </Link>
      ))}
    </section>
  )
}

export default ProjectsList;
