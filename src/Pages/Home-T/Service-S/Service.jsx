import React from 'react'
import './Service.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);






const Service = () => {


  // useGSAP(()=>{
  //   let sl = gsap.timeline();
  //   sl.to('.services-items',{
  //     transform : 'scale(1.4 ,1.5)',
  //     duration : 4,
  //     scrollTrigger : {
  //       trigger : '.services-items',
  //       scroller : 'body',
  //       start:'top 90%',
  //       end : 'top 25%',
  //       scrub :2
  //     }
  //   })
  //   sl.to('.services-items-box',{
  //     transform:'translateX(-128%)',
  //     scrollTrigger : {
  //       trigger : '#service',
  //       scroller : 'body',
  //       start:'top 0%',
  //       end : 'top -400%',
  //       scrub:3,
  //       pin :true
  //     }
  //   })
  // })

  return (
    <div id='service' className='container'>
      
        <h6 style={{ fontSize : '1rem', position : 'relative' , top : '7vw', color :"var(--yellow)"}}><pre style={{color : '#fff', display : 'inline-block'}}>04 </pre>/ 05</h6>
        <div className="services-box">
          <h2 className="headline-text">My Services</h2>
          <div  className="services-items-box">
            {/* <div className="services-items-upper-box"></div> */}

              <div className="services-items">
                <div className="items-img-box">
                <img src="https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="services-items-contain">
                    <i className="fa-solid fa-globe"></i>
                    <h4>Web Development</h4>
                    <p>I can create a custom website for your business or startup...</p>
                    <button>More</button>
               
                </div>
              </div>

                <div className="services-items">
                <div className="items-img-box">
                <img src="https://cdn.pixabay.com/photo/2017/04/20/13/02/technology-2245662_1280.jpg" alt="" />
                </div>
                  <div className="services-items-contain">
                        <i className="fa-solid fa-palette"></i>
                        <h4>UI/UX Design</h4>
                        <p>I can disign beautiful and intuitive user interface for your app...</p>
                        <button>More</button>
                 
              </div>
              </div>
              <div className="services-items">
              <div className="items-img-box">
              <img src="https://cdn.pixabay.com/photo/2018/12/10/02/14/manhattan-3866140_1280.jpg" alt="" />
              </div>
                <div className="services-items-contain">
                    <i className="fa-solid fa-database"></i>
                    <h4>Backend Development</h4>
                    <p>I can build your server-side logic for your web app...</p>
                    <button>More</button>
               
              </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Service
