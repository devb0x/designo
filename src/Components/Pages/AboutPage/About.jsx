import React, {Fragment} from 'react'

import Cta from "../../Cta/Cta"

import classes from './About.module.css'
import Leaf from "../../UI/Leaf/Leaf"

import worldClassImg from '../../../assets/about/mobile/image-world-class-talent.jpg'
import worldClassImgTablet from '../../../assets/about/tablet/image-world-class-talent.jpg'
import worldClassImgDesktop from '../../../assets/about/desktop/image-world-class-talent.jpg'
import realDealImg from '../../../assets/about/mobile/image-real-deal.jpg'
import realDealImgTablet from '../../../assets/about/tablet/image-real-deal.jpg'
import realDealImgDesktop from '../../../assets/about/desktop/image-real-deal.jpg'
import bgPattern from '../../../assets/about/mobile/bg-pattern-hero-about-mobile.svg'
import LocationsList from "../../LocationsList/LocationsList"

const About = () => {
  const AboutCard = (props) => {
    return (
      <div className={`${classes['about-card']}`}>
        <picture>
          <source srcSet={props.imgDesktop} media="(min-width: 1440px)" />
          <source srcSet={props.imgTablet} media="(min-width: 768px)" />
          <img
            src={props.img}
            alt={props.title}
            className={`${classes['about-card__img']}`}
          />
        </picture>
        <div className={`${classes['about-card__wrapper']}`} style={{backgroundImage: bgPattern}}>
          <h3 className={`${classes['about-card__title']}`}>
            {props.title}
          </h3>
          <p className={`${classes['about-card__text']}`}>
            {props.text}
          </p>
          <p className={`${classes['about-card__text']}`}>
            {props.textTwo}
          </p>
        </div>
      </div>
    )
  }

  return (
    <Fragment>

      <header className={`${classes['hero']}`}>
        <div style={{position: 'absolute', inset: '0', overflow: 'hidden'}}>
          <div className={`${classes['hero-pattern']}`}/>
        </div>
        <div className={`${classes['hero-wrapper']}`}>
          <h2 className={`${classes['hero-title']}`}>
            About Us
          </h2>
          <p className={`${classes['hero-text']}`}>
            Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered
            with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always
            looking forward to creating brands, products, and digital experiences that connect with our clients’
            audiences.
          </p>
        </div>
        <div  className={`${classes['hero-img']}`}/>
        <Leaf class="leaf" />
      </header>

      <AboutCard
        img={worldClassImg}
        imgTablet={worldClassImgTablet}
        imgDesktop={worldClassImgDesktop}
        background={bgPattern}
        title="World-class talent"
        text="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted
        from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad
        of platforms."
        textTwo="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just
        as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been
        impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
      />

      <LocationsList />

      <AboutCard
        img={realDealImg}
        imgTablet={realDealImgTablet}
        imgDesktop={realDealImgDesktop}
        title="The real deal"
        text="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
        Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every
        opportunity. We make design and technology more accessible and give you tools to measure success."
        textTwo="We are visual storytellers in appealing and captivating ways. By combining business and marketing
        strategies, we inspire audiences to take action and drive real results."
      />

      <Cta />
    </Fragment>
  )
}

export default About