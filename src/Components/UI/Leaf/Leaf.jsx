import React from 'react';
import PropTypes from "prop-types"

import classes from './Leaf.module.css'
import leaf from "../../../assets/shared/desktop/bg-pattern-leaf.svg"

const Leaf = (props) => {
  return (
    <div className={`${classes[`${props.class}`]}`}>
      <img src={leaf} alt="leaf"/>
    </div>
  )
}

export default Leaf

Leaf.propTypes = {
  class: PropTypes.string
}
