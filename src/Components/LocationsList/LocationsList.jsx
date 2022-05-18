import React from 'react'
import {Link, useLocation} from "react-router-dom"

import data from '../../data/Locations.json'
import classes from './LocationsList.module.css'
import Button from "../UI/Button/Button"
import Leaf from "../UI/Leaf/Leaf"
import bgPattern from '../../assets/shared/desktop/bg-pattern-small-circle.svg'

const LocationsList = () => {
  let loc = useLocation()

  return (
    <section className={`${classes['section-locations']}`}>
      {data.map((el, index) => (
        <div
          className={`${classes['location']}`}
          key={index}
        >
          <img
            src={bgPattern}
            alt="background circle pattern"
            className={ `${classes['location-background']} ${classes[`${el.class}`]}` }
          />
          <img
            className={`${classes['location-img']}`}
            src={el.thumb}
            alt={el.name}
          />

          <h4 className={`${classes['location-name']}`}>{el.name}</h4>
          <Button
            type="button"
            class="btn btn-on-light"
          >
            <Link to="/locations">see location</Link>
          </Button>
        </div>
      ))}
      <Leaf
        class={loc.pathname === '/about' ? "leaf-alt" : "leaf-contact" }
      />
    </section>
  )
}

export default LocationsList
