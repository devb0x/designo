import React from "react"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

import './App.css'

import Navbar from "./Components/Navbar/Navbar"
import Homepage from "./Components/Pages/Homepage"
import WebDesign from "./Components/Pages/WebDesign"
import AppDesign from "./Components/Pages/AppDesign"
import GraphicDesign from "./Components/Pages/GraphDesign"
import Footer from "./Components/Footer/Footer"
import About from "./Components/Pages/AboutPage/About"
import Locations from "./Components/Pages/LocationsPage/Locations"
import ContactPage from "./Components/Pages/ContactPage/ContactPage"
import ScrollToTop from "./Components/UI/ScrollToTop"



function App() {
  return (
      <Router>
        <ScrollToTop>
          <Navbar />
          <main className="main">
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
              <Route
                exact path={'/about'}
                element={ <About /> }
              />
              <Route
                exact path={'/locations'}
                element={ <Locations /> }
              />
              <Route
                exact path={'/contact'}
                element={ <ContactPage /> }
              />
              <Route
                path="*"
                element={ <Navigate to="/homepage" /> }
              />
            </Routes>
          </main>
          <Footer />
        </ScrollToTop>
      </Router>
  )
}

export default App

// <Card
// class={'card card-top app-design-bg'}
// title={'app design'}
// text={'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'}
// />
