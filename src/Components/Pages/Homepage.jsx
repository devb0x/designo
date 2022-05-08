import React, {Fragment} from 'react'

import Hero from "../Hero/Hero"
import ProjectsList from "../ProjectsList/ProjectsList"
import PerksList from "../PerksList/PerksList"
import Cta from "../Cta/Cta"

const Homepage = () => {
  return (
    <Fragment>
      <Hero />
      <ProjectsList />
      <PerksList />
      <Cta />
    </Fragment>
  )
}

export default Homepage