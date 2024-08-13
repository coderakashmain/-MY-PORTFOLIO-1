import './Nav.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'



const Nav=()=> {
  const [sticky, setSticky] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >=650 ? setSticky(true) :setSticky(false);
    })
  },[])
  

  useGSAP(()=>{
    
    const tl=gsap.timeline();
    tl.from('.navbar h2,.nav-box  a',{
      x:-70,
      scale:0,
      opacity:0,
      duration:0.5,
      stagger:0.07
    })
  })
  return (
      <nav id='nav' className={` ${sticky ? "trans-nav" : "trans-nav-off"}`} >
          <div className="navbar">
              <div  className=" nav-box icon">
                <h2>Portfolio.</h2>
              </div>
            <ul className="nav-box nav-tag">
              <a href="#"><li className="nav-item">Home</li></a>
              <a href="#about"><li className="nav-item">About</li></a>
              <a href="#skills"><li className="nav-item">Skills</li></a>
              <a href="#service"><li className="nav-item">Services</li></a>
            </ul>
            <ul className="nav-box contact-btn hover-effect ">
            <a className={` ${sticky ? "trans-nav-btn" : "trans-nav-btn-off"}`}  href="#contact"><li>Get in touch</li></a>
            </ul>
          </div>
      </nav>
  )
}
export default Nav