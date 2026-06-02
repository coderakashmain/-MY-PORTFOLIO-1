import React from 'react'
import './Service.css'



const Service = () => {

  return (
    <div id='service' className='container'>
      
        <h6 style={{ fontSize : '1rem', position : 'relative' , top : '7vw', color :"var(--yellow)"}}><pre style={{color : '#fff', display : 'inline-block'}}>04 </pre>/ 05</h6>
        <div className="services-box">
          <h2 className="headline-text">My Services</h2>
          <div  className="services-items-box">
            {/* <div className="services-items-upper-box"></div> */}
              <div className="services-items">
                <div className="services-items-contain">
                    <i className="fa-solid fa-globe"></i>
                    <h4>Web Development</h4>
                    <p>I can create a custom website for your business or startup...</p>
                    <button>More</button>
                </div>
              </div>
                <div className="services-items">
                  <div className="services-items-contain">
                        <i className="fa-solid fa-palette"></i>
                        <h4>UI/UX Design</h4>
                        <p>I can disign beautiful and intuitive user interface for your app...</p>
                        <button>More</button>
                  </div>
              </div>
              <div className="services-items">
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
