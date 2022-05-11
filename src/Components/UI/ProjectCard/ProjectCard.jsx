import React from 'react'

import classes from './ProjectCard.module.css'
import PropTypes from "prop-types"

const ProjectCard = (props) => {
  return (
    <a
      href="#"
      className={`${classes['card']}`}
    >
      <img
        className={`${classes['card-img']}`}
        src={props.thumb}
        alt=""
      />
      <div className={`${classes['card-bottom']}`}>
        <h3 className={`${classes['card-title']}`}>{props.title}</h3>
        <div className={`${classes['card-description']}`}>{props.description}</div>
      </div>
    </a>
  )
}

export default ProjectCard

ProjectCard.propTypes = {
  thumb: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}
