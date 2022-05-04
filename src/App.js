import React from "react"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

import './App.css'

import Navbar from "./Components/Navbar/Navbar"
import Homepage from "./Components/Pages/Homepage"
import WebDesign from "./Components/Pages/WebDesign"
import AppDesign from "./Components/Pages/AppDesign"
import GraphicDesign from "./Components/Pages/GraphDesign"



function App() {
  return (
    <main className="main">
      <Router>
        <Navbar />
          <Routes>
            <Route
              exact path={'/'}
              element={ <Navigate to="/homepage" /> }
            />
          <Route
            exact path={'/homepage'}
            element={ <Homepage /> }
          />
          <Route
            exact path={'/web-design'}
            element={ <WebDesign /> }
          />
          <Route
            exact path={'/app-design'}
            element={ <AppDesign /> }
          />
          <Route
            exact path={'/graphic-design'}
            element={ <GraphicDesign /> }
          />
        </Routes>
      </Router>
    </main>
  )
}

export default App

// <Card
// class={'card card-top app-design-bg'}
// title={'app design'}
// text={'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'}
// />
