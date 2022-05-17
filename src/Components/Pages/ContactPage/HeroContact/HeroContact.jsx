import React from 'react'

import classes from './HeroContact.module.css'
import FormContact from "../FormContact/FormContact"

const HeroContact = () => {
  return (
    <div className={`${classes['hero']}`}>
      <div className={`${classes['hero-wrapper']}`}>
        <h1 className={`${classes['hero-title']}`}>Contact Us</h1>
        <p className={`${classes['hero-text']}`}>
          Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your
          business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
        </p>
        <picture className={`${classes['hero-bg']}`}>
          <source srcSet="../../../../assets/contact/desktop/bg-pattern-hero-desktop.svg" media="(min-width: 768px)" />
          <img src="../../../../assets/contact/mobile/bg-pattern-hero-contact-mobile.svg" alt="bg pattern"/>
        </picture>
      </div>
      <div className={`${classes['hero-form']}`}>
        <FormContact />
      </div>
    </div>
  )
}

export default HeroContact