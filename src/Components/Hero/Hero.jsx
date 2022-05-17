import React from 'react'

import Button from "../UI/Button/Button"
import classes from './Hero.module.css'

import heroPhone from '../../assets/home/desktop/image-hero-phone.png'
import bgPattern from '../../assets/home/desktop/bg-pattern-hero-home.svg'
import Leaf from "../UI/Leaf/Leaf"
import {Link} from "react-router-dom"

const Hero = () => {

  return (
    <section className={`${classes['hero']}`}>
      <div className={`${classes['hero-wrapper']}`}>
        <h1 className={`${classes['hero-title']}`}>
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className={`${classes['hero-paragraph']}`}>
          With over 10 years in the industry, we are experienced in creating fully responsive websites, apps,
          and engaging brand experiences. Find out more about our services.
        </p>
        <Button class="btn btn-on-dark">
          <Link to="/about" className="dark-grey">Learn more</Link>
        </Button>
      </div>
      <div className={`${classes['hero-wrapper__img']}`}>
        <img src={bgPattern} alt="pattern" className={`${classes['pattern']}`}/>
        <img src={heroPhone} alt="phone" className={`${classes['phone-img']}`}/>
      </div>
      <Leaf class="leaf" />
    </section>
  )
}

export default Hero