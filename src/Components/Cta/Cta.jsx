import React from 'react'

import classes from './Cta.module.css'
import Button from "../UI/Button/Button"

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
      </div>
      <Button class='btn btn-on-dark'>
        Get in touch
      </Button>
    </div>
  )
}

export default Cta
