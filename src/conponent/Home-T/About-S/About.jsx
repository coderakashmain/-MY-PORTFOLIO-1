import React from 'react'
import './About.css'

const About = () => {
 
  return (
    <section id="about"  className = "container">
      <div className="about-box">
        <h6 style={{ fontSize : '1rem', position : 'absolute' , top : '7vw', color :"var(--yellow)"}}><pre style={{color : '#fff', display : 'inline-block'}}>02 </pre>/ 05</h6>
        
        <h3 className='headline-text'>About me</h3>
        <div className="about-box-2ndhead">
          <h4>PASSIONATE</h4>
          <h4>Apathetic</h4>
          <h4>achiever</h4>
          <h4>BELEIVER</h4>
        </div>
        <div className="line" style={{width :'100%',display :'flex', flexDirection : 'column',alignItems : 'flex-end'}}>

        <hr  style={{width : "60%" , margin : '0 0 3vh 0'}}/>
        <hr  style={{width : "30%"}}/>
        </div>
        <div className="about-box-text">
        <div className="about-box-text-pic">

        </div>

          <div className="about-box-text-descrip">
              <h3>Full-stack Developer</h3>
              <p> Hello! I’m Akash Bindhani, a graduating student with a passion for full-stack development. Over the past year, I’ve immersed myself in the world of React.js, contributing to exciting projects and honing my skills. I have experience working on a projects using technologies like React, NodeJS, Express and Django. As a dedicated developer, I firmly believe that possessing strong skills is the key to staying ahead. My goals is to build user-friendly applications that provide value to users. I'm passoionate about learing new technologies and solving problems.”
              </p>
          </div>

         
          {/* <hr style={{transform:'rotate(10deg)'}}/> */}
        </div>
      </div>
    
    </section>
  )
}

export default About
