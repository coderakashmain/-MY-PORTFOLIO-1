import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div id='skills' className='container' >
      <h6 style={{ fontSize : '1rem', position : 'relative' , top : '7vw', color :"var(--yellow)"}}><pre style={{color : '#fff', display : 'inline-block'}}>03 </pre>/ 05</h6>
      <div className="skills-box">
          <h3 className='headline-text'>My skills</h3>
            <div className="skills-pic-box">
              <div className="skills-pic"> 
                    <img src="https://cdn.elearningindustry.com/wp-content/uploads/2019/03/employee-or-employer-who-is-responsible-for-improving-employee-performance-and-how.jpeg" alt="" />
              </div>
              <p>I'm a full-stack developer for creating solution to complex problems. I have experience with HTML, CSS, Javascript, ReactJS, NodeJS and C++. I have also professional skills such as active listening, communication and teamwork.</p>
            </div>
            <div className="skills-list-box">
                <h5>Technical Skills</h5>
                <div className="skills-list">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>Javascript</p>
                  <p>ReactJS</p>
                  <p>NodeJS</p>
                  <p>Express</p>
                  <p>django</p>
                  <p>C++</p>
                </div>
                <h5>Professional Skills</h5>
                <div className="skills-list">
                  <p>Active Listener</p>
                  <p>Communication</p>
                  <p>Teamwork</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Skills
