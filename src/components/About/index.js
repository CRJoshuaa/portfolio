import "./index.scss"

import Me from "../../assets/images/me2.jpg"

import React from 'react'

const About = () => {
  return (
    <div className="about">
        <div className="about-left">
        <div className="about-card bg"></div>
            <div className="about-card">
                <img src={Me}
                    alt="" className="about-image" />
            </div>
            
        </div>
        <div className="about-right">
            <h1 className="about-title">About Me</h1>
            <p className="about-subtitle">
                I'm ready to learn!
            </p>

            <p className="about-description">
                Data can describe alot about anything, be it the performance of
                a project that you're working on, or even your potential target audience
                for your new game-breaking product. 
            </p>
        </div>
    </div>
  )
}

export default About