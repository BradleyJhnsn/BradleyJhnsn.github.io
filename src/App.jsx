import React from 'react'
import Navbar from './components/navbar'
import About from './components/about'
import Projects from './components/projects'
import Resume from './components/resume'
import Contact from './components/contact'
import Source from './components/source'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div id="page">
        <About/>
        <Projects/>
        <Resume/>
        <Contact/>
        <Source/>
      </div>
    </div>
  )
}

export default App
