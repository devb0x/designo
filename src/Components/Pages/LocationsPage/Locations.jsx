import React, {Fragment} from 'react'

import data from '../../../data/Locations.json'
import classes from './Locations.module.css'

import Cta from "../../Cta/Cta"

const Locations = () => {

  return (
    <Fragment>
      <section className={`${classes['section-locations']}`}>
        {data.map(location => (
          <div className={`${classes['location']}`}>
            <div className={`${classes['location-map']}`}>
              <iframe className={`${classes['location-map__iframe']}`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.1995576352065!2d-79.3945394!3d43.6440163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d9a0737d9f%3A0xbc1ae74f23fabf4e!2sWellington%20St%20W%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sfr!4v1652359049028!5m2!1sen!2sfr"
                style={{border: '0'}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className={`${classes['location-info']}`}>
              <h3 className={`${classes['location-info__name']}`}>{location.name}</h3>
              <div className={`${classes['location-info__wrapper']}`}>
                <h5 className={`${classes['location-info__title']}`}>{location.office}</h5>
                <p className={`${classes['location-info__text']}`}>
                  {location.address}<br />
                  {location.address_part2}
                </p>
              </div>
              <div className={`${classes['location-info__wrapper']}`}>
                <h5 className={`${classes['location-info__title']}`}>Contact</h5>
                <div className={`${classes['location-info__text']}`}>
                  P : {location.phone}
                </div>
                <div className={`${classes['location-info__text']}`}>
                  M : {location.mail}
                </div>
              </div>

              <img
                className={`${classes['location-background']}`}
                src="../../../assets/shared/desktop/bg-pattern-three-circles.svg"
                alt="pattern three dots"
              />

            </div>

          </div>
        ))}

      </section>

      <Cta />
    </Fragment>
  )
}

export default Locations