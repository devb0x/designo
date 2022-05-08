import React from 'react'
import {Link} from "react-router-dom"

import SocialLinks from "./SocialLinks"

import classes from './Footer.module.css'
import logoLight from '../../assets/shared/desktop/logo-light.png'

const Footer = () => {

  return (
    <footer className={`${classes['footer']}`} >

      <div className={`${classes['footer-main__container']}`}>

        <nav className={`${classes['footer-nav']}`} >
          <Link to="/" className={`${classes['logo']}`}>
            <img
              className={`${classes['logo-img']}`}
              src={logoLight}
              alt="designo logo"
            />
          </Link>
          <hr className={`${classes['divider']} ${classes['mobile']}`}/>
          <ul className={`${classes['nav-list']}`}>
            <li>
              <Link to='/' className={`${classes['nav-item__link']}`}>
                our company
              </Link>
            </li>
            <li>
              <Link to='/' className={`${classes['nav-item__link']}`}>
                locations
              </Link>
            </li>
            <li>
              <Link to='/' className={`${classes['nav-item__link']}`}>
                contact
              </Link>
            </li>
          </ul>
        </nav>

        <hr className={`${classes['divider']} ${classes['tablet']}`}/>

        <div className={`${classes['footer-wrapper']}`}>
          <div className={`${classes['container']}`}>
            <h4 className={`${classes['container-title']}`}>Designo Central Office</h4>
            <div className={`${classes['container-text']}`}>
              3886 Wellington Street<br />
              Toronto, Ontario M9C 3J5
            </div>
          </div>

          <div className={`${classes['container']}`}>
            <h4 className={`${classes['container-title']}`}>contact us (central office) </h4>
            <div className={`${classes['container-text']}`}>
              P : +1 253-863-8967<br/>
              M : contact@designo.co
            </div>
          </div>

          <nav className={`${classes['social']}`}>
            <ul className={`${classes['social-list']}`}>
              {SocialLinks.map((el, index) => (
                <li key={index} className={`${classes['social-list__item']}`}>
                  <a
                    href={el.url}
                    target="_blank"
                    rel="noreferrer"
                    className={ `${classes['social-list__icon']} ${classes[`${el.class}`]} }` }
                  >
                    <span style={{opacity: 0}}>{el.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>

      </div>
    </footer>
  )
}

export default Footer