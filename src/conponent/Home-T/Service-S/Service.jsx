import React from 'react'
import './Service.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'





const Service = () => {
  useGSAP(()=>{
    let sl = gsap.timeline();
    // tl.to('.services-items',{
    //   transform : 'scaleX(1)',
    //   transform : 'scaley(1.2)',

    //   duration : 4,
    //   scrollTrigger : {
    //     trigger : '.services-items',
    //     scroller : 'body',
    //     markers : true,
    //     start:'top 50%',
    //     end : 'top 79%',
    //     scrub :2
    //   }
    // })
    sl.to('.services-items-box',{
      transform:'translateX(-100%)',
      scrollTrigger : {
        trigger : '.services-items-box',
        scroller : 'body',
        markers : true,
        start:'top 0%',
        end : 'top 79%',
        scrub:2
      }
    })
  })

  return (
    <div id='service' className=''>
      
        <h6 style={{ fontSize : '1rem', position : 'relative' , top : '7vw', color :"var(--yellow)",padding : '0% 12% 0%'}}><pre style={{color : '#fff', display : 'inline-block'}}>04 </pre>/ 05</h6>
        <div className="services-box">
          <h2 className="headline-text">My Services</h2>
          <div  className="services-items-box">
            {/* <div className="services-items-upper-box"></div> */}

              <div className="services-items">
                <div className="items-img-box">
                <img src="https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className="services-items-contain">
                    <i className="fa-solid fa-globe"></i>
                    <h4>Web Development</h4>
                    <p>I can create a custom website for your business or startup...</p>
                    <button>More</button>
                </div>
                </div>
              </div>

                <div className="services-items">
                <div className="items-img-box">
                <img src="https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  <div className="services-items-contain">
                        <i className="fa-solid fa-palette"></i>
                        <h4>UI/UX Design</h4>
                        <p>I can disign beautiful and intuitive user interface for your app...</p>
                        <button>More</button>
                  </div>
              </div>
              </div>
              <div className="services-items">
              <div className="items-img-box">
              <img src="https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
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
    </div>
  )
}

export default Service
