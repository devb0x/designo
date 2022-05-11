import React from 'react';

import Perks from "./Perks"
import classes from './PerksList.module.css'

import bgPattern from '../../assets/home/desktop/bg-pattern-hero-home.svg'
import Leaf from "../UI/Leaf/Leaf"

const PerksList = () => {

  return (
    <section className={`${classes['perks']} content`}>
      {Perks.map((el, index) => (
        <div className={`${classes['perk']}`} key={index}>
          <div>
            <img
              className={`${classes['perk-image']}`}
              src={`${el.imgUrl}`}
              alt={`${el.title} character`}
            />
            <img
              className={`${classes['perk-image__background']} ${classes[`${el.class}`]}`}
              src={bgPattern}
              alt="background circle pattern"
            />
          </div>
          <div className={`${classes['perk-text__wrapper']}`}>
            <h3 className={`${classes['perk-title']}`}>
              {el.title}
            </h3>
            <p className={`${classes['perk-paragraph']}`}>
              {el.text}
            </p>
          </div>

        </div>
      ))}
      <Leaf class="leaf-reverse"/>
    </section>
  )
}

export default PerksList