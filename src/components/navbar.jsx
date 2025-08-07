import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
    <nav>
      <div id="name">Bradley Johnson</div>
      <div id="items">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#source">Source</a></li>
        </ul>
      </div>
      <div id="button"></div>
    </nav>
  )
}

export default navbar
