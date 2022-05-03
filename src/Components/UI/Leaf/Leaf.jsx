import React from 'react';

import classes from './Leaf.module.css'
import leaf from "../../../assets/shared/desktop/bg-pattern-leaf.svg"

const Leaf = () => {
  return (
    <div className={`${classes['leaf']}`}>
      <img src={leaf} alt="leaf"/>
    </div>
  )
}

export default Leaf