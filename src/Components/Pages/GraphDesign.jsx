import React, { Fragment } from 'react'

import ProjectsList from "../ProjectsList/ProjectsList"
import Cta from "../Cta/Cta"
import Intro from "../UI/Intro/Intro"
import data from '../../data/GraphDesignProjects.json'
import ProjectCard from "../UI/ProjectCard/ProjectCard"
import UnorderedList from "../UI/UnorderedList/UnorderedList"

const GraphDesign = () => {
  return (
    <Fragment>
      <Intro
        title="Graphic Design"
        text="We deliver eye-catching branding materials that are tailored to meet your business objectives."
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

export default GraphDesign