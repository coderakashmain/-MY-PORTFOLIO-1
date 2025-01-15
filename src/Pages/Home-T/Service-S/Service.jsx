import React ,{useEffect, useRef, useState} from 'react'
import './Service.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);






const Service = () => {

  const [moreServicesBackEnd, setMoreServicesBackEnd] = useState(false);
  const [moreServicesUx, setMoreServicesUx] = useState(false);
  const [moreServicesFrontend, setMoreServicesFrontend] = useState(false);
  const [wholeback, setWholeback] = useState(false);

  const moreServicesRef = useRef();


    const handleclick = ()=>{
        setWholeback(false);
        setMoreServicesBackEnd(false);
        setMoreServicesUx(false);
        setMoreServicesFrontend(false);
    }
 
useEffect(()=>{
  if(moreServicesBackEnd || moreServicesFrontend  || moreServicesUx){
    
    setWholeback(true);
    
  }
},[moreServicesBackEnd, moreServicesFrontend, moreServicesUx]);

// useEffect(()=>{
//   if(wholeback){
//     document.body.style.overflowY = "hidden";
//   }else{
//     document.body.style.overflowY = 'scroll'
//   }
//   console.log(wholeback);
// },[wholeback])

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
      
        <h6 style={{ fontSize : '1rem', position : 'relative' , top : '7vw', color :"var(--yellow)"}}><pre style={{color : 'var(--blackscreentextcolor)', display : 'inline-block'}}>04 </pre>/ 05</h6>
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
                    <h4>Frontend Development</h4>
                    <p>I can create a custom website for your business or startup...</p>
                    <button onClick={()=>{setMoreServicesFrontend(true)}}>More</button>
               
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
                        <button onClick={()=>{setMoreServicesUx(true)}}>More</button>
                 
              </div>
              </div>
              <div className="services-items">
              <div className="items-img-box">
              <img src="https://cdn.pixabay.com/photo/2024/05/21/19/58/code-8779051_1280.jpg" alt="" />
              </div>
                <div className="services-items-contain">
                    <i className="fa-solid fa-database"></i>
                    <h4>Backend Development</h4>
                    <p>I can build your server-side logic for your web app...</p>
                    <button onClick={()=>{setMoreServicesBackEnd(true)}}>More</button>
               
              </div>
              </div>
          </div>
          {wholeback &&(<div ref={moreServicesRef} onClick={handleclick} className={`more-services ${moreServicesBackEnd || moreServicesUx ||moreServicesFrontend ? 'pop-up-on' : 'pop-up-off'}`}>
          {moreServicesBackEnd &&(
            <div className="more-services-box">
            <i className="fa-solid fa-database"></i>
                    <h4>Backend Development</h4>
                    <p>I can build your server-side logic for your web app and 
                    I specialize in building robust server-side logic for web applications, with expertise in designing scalable architectures using Node.js and Express.js, creating RESTful APIs, and integrating databases like MySQL and MongoDB. I implement secure authentication systems, handle error logging, and develop real-time features using WebSockets. Additionally, I ensure seamless deployment and scalability on cloud platforms like AWS, focusing on performance and security to deliver efficient and maintainable backend solutions.</p>
                    <div className="more-services-btn">
                    <button onClick={()=>{setMoreServicesBackEnd(false)}}>Close</button>
                    </div>
                   
      
           
          </div>)}
         {moreServicesUx &&(
            <div className="more-services-box">
            <i className="fa-solid fa-palette"></i>
                        <h4>UI/UX Design</h4>
                        <p>I can disign beautiful and intuitive user interface for your app. I am passionate about creating intuitive and visually appealing user interfaces that enhance user experiences. By combining design principles with a deep understanding of user behavior, I craft layouts that are not only aesthetically pleasing but also highly functional. My approach to UI/UX design involves thorough research, prototyping, and iterative testing to ensure that every interaction is smooth and meaningful. Whether it’s designing a new product from scratch or refining an existing interface, I aim to deliver designs that resonate with users and meet business goals.</p>
                    <div className="more-services-btn">
                    <button onClick={()=>{setMoreServicesUx(false)}}>Close</button>
                    </div>
                   
           
           
          </div>)}
        {moreServicesFrontend&&(  
            <div className="more-services-box">
          
            <i className="fa-solid fa-globe"></i>
                    <h4>Frontend Development</h4>
                    <p>I can build your server-side logic for your web app. I specialize in crafting responsive, user-friendly web interfaces using modern technologies like React.js, HTML, CSS, and JavaScript. My expertise extends to leveraging powerful libraries and frameworks to build dynamic and interactive applications. With a focus on clean and maintainable code, I create seamless user experiences that work flawlessly across devices. From simple landing pages to complex web applications, I bring ideas to life with precision and creativity.</p>
                    <div className="more-services-btn">
                    <button onClick={()=>{setMoreServicesFrontend(false)}}>Close</button>
                    </div>
                   
           
          </div>)}
            </div>)}
        </div>
        
    </div>
  )
}

export default Service
