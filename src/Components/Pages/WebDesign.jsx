import React, {Fragment} from 'react'

import ProjectsList from "../ProjectsList/ProjectsList"
import Cta from "../Cta/Cta"
import Intro from "../UI/Intro/Intro"
import data from '../../data/WebDesignProjects.json'
import ProjectCard from "../UI/ProjectCard/ProjectCard"
import UnorderedList from "../UI/UnorderedList/UnorderedList"

const WebDesign = () => {

  return (
    <Fragment>
      <Intro
        title="Web Design"
        text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
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

export default WebDesign