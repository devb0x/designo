import React from 'react'

import classes from './Cta.module.css'
import {Link} from "react-router-dom"

const Cta = () => {

  return (
    <div className={`${classes['cta']}`}>
      <div className={`${classes['cta-wrapper']}`}>
        <h3 className={`${classes['cta-title']}`}>
          Let’s talk about<br/>
           your project
        </h3>
        <p className={`${classes['cta-paragraph']}`}>
          Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
        </p>
        <Link to="/contact" className="btn btn-on-dark dark-grey">get in touch</Link>
      </div>
    </div>
  )
}

export default Cta
