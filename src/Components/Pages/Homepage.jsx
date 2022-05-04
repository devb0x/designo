import React, {Fragment} from 'react'

import Hero from "../Hero/Hero"
import ProjectsList from "../ProjectsList/ProjectsList"
import PerksList from "../PerksList/PerksList"

const Homepage = () => {
  return (
    <Fragment>
      <Hero />
      <ProjectsList />
      <PerksList />
    </Fragment>
  )
}

export default Homepage