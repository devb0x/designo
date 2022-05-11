import React from 'react'

import classes from './UnorderedList.module.css'

const UnorderedList = (props) => {

  return (
    <ul className={`${classes['ul']}`}>
      {props.children}
    </ul>
  )
}

export default UnorderedList