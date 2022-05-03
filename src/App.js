import './App.css'

import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import ProjectsList from "./Components/ProjectsList/ProjectsList"
import Card from "./Components/UI/Card/Card"
import Leaf from "./Components/UI/Leaf/Leaf"

function App() {
  return (
    <main className="main">
      <Navbar />
      <Hero />

      <ProjectsList />
    </main>
  )
}

export default App

// <Card
// class={'card card-top app-design-bg'}
// title={'app design'}
// text={'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'}
// />
