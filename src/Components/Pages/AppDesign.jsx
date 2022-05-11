import React, { Fragment } from 'react'

import ProjectsList from "../ProjectsList/ProjectsList"
import Cta from "../Cta/Cta"
import Intro from "../UI/Intro/Intro"
import UnorderedList from "../UI/UnorderedList/UnorderedList"
import data from "../../data/AppDesignProjects.json"
import ProjectCard from "../UI/ProjectCard/ProjectCard"

const AppDesign = () => {
  return (
    <Fragment>
      <Intro
        title="App Design"
        text="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />

      <UnorderedList>
        {data.map((el, index) => (
          <li key={index} >
            <ProjectCard
              title={el.title}
              description={el.description}
              thumb={el.thumb}
            />
          </li>
        ))}
      </UnorderedList>

      <ProjectsList />
      <Cta />
    </Fragment>
  )
}

export default AppDesign