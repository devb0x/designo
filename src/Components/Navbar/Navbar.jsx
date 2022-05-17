import React, {useState} from 'react'

import designoDark from '../../assets/shared/desktop/logo-dark.png'
import hamburger from '../../assets/shared/mobile/icon-hamburger.svg'
import close from '../../assets/shared/mobile/icon-close.svg'

import classes from './Navbar.module.css'
import {Link} from "react-router-dom"

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={`${classes['nav']} content`}>
      <Link
        to="/homepage"
        className={`${classes['logo']}`}
      >
        <img
          src={designoDark}
          alt="designo logo"
        />
      </Link>
      <ul className={
        !isOpen ?
          `${classes['nav-list']}` :
          `${classes['nav-list']} ${classes['mobile']}`
      }>
        <li className={`${classes['nav-list__item']}`}>
          <Link to="/about">
            our company
          </Link>
        </li>
        <li className={`${classes['nav-list__item']}`}>
          <Link to="/locations">
            locations
          </Link>
        </li>
        <li className={`${classes['nav-list__item']}`}>
          <Link to="/contact">
            contact
          </Link>
        </li>
      </ul>
      <div
        className={
          !isOpen ?
            `${classes['hamburger']}` :
            `${classes['close']}`
        }
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <img src={!isOpen ? hamburger : close} alt="hamburger icon"/>
      </div>
      {isOpen &&
        <div  className={`${classes['background']}`}/>
      }
    </nav>
  )
}

export default Navbar