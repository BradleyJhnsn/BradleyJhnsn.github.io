import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
    <nav class="container">
      <ul>
        <li class="home"><a href="/">Bradley Johnson</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="https://github.com/bradleyjhnsn/bradleyjhnsn.github.io" target="_blank">Source</a></li>
      </ul>
    </nav>
  )
}

export default navbar
