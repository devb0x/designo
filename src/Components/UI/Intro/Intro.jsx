import React from 'react'

import classes from './Intro.module.css'
import Leaf from "../Leaf/Leaf"

const Intro = (props) => {
  return (
    <header className={`${classes['intro']}`}>
      <div className={`${classes['intro-wrapper']}`}>
        <h1 className={`${classes['intro-title']}`}>{props.title}</h1>
        <p className={`${classes['intro-text']}`}>{props.text}</p>
      </div>
      <Leaf class="leaf" />
    </header>
  )
}

export default Intro
