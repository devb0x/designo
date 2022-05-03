import React from 'react'

import classes from './Card.module.css'

const Card = (props) => {
  return (
    <div className={props.class}>
      <div className={`${classes['card-wrapper']}`}>
        <h1 className={`${classes['card-title']}`}>{props.title}</h1>
        <p className={`${classes['card-paragraph']}`}>{props.text}</p>
      </div>
    </div>
  )
}

export default Card