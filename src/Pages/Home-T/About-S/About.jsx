import React, { useContext, useEffect, useRef } from 'react'
import './About.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { AboutusRefdata } from '../../../Context/AboutusRefContext/AboutusRefContext'
import logo from '../../../Photos/akashphoto.jpg'

const About = () => {

  const aboutpageRef = useRef();
  const pagecountRef = useRef();
  const aboutheadRef = useRef();
  const svgRef = useRef();
  const firstsvgRef = useRef();
  const secondsvgRef = useRef();


  const {setAboutuspageData} = useContext(AboutusRefdata);


useEffect(()=>{
  setAboutuspageData(aboutheadRef.current);
},[]);

  useGSAP(()=>{

    const handlescroll = ()=>{

   
    const tl = gsap.timeline();

    
    tl.from(pagecountRef.current,{
      x : -100,
      opacity : 0,
      duration : 2,
      scrollTrigger : {
        trigger : aboutpageRef.current,
        scroll : "body",
        start : 'top 50%',
        end : 'top 10%',
        scrub : 2

      }
    })
    .from(aboutheadRef.current,{
      x : 300,
      opacity : 0,
      duration : 5,
      scrollTrigger : {
        trigger : aboutpageRef.current,
        scroll : "body",
        start : 'top 65%',
        end : 'top 20%',
        scrub : 2
      }
    })
    tl.from('.about-box-2ndhead h5',{
      x : -100,
      opacity : 0,
      duration : 2,
      stagger : 0.3,
      scrollTrigger : {
        trigger : aboutpageRef.current,
        scroll : "body",
        start : 'top 50%',
        end : 'top 10%',
        scrub : 2
      }
    })
    tl.from(firstsvgRef.current,{
      x : -900,
      opacity : 0,
      duration : 2,
      stagger : 0.3,
      scrollTrigger : {
        trigger : aboutpageRef.current,
        scroll : "body",
        start : 'top 50%',
        end : 'top 10%',
        scrub : 2
      }
    })
    tl.from(secondsvgRef.current,{
      x : 900,
      opacity : 0,
      duration : 2,
      stagger : 0.3,
      scrollTrigger : {
        trigger : aboutpageRef.current,
        scroll : "body",
        start : 'top 50%',
        end : 'top 10%',
        scrub : 2
      }
    })
  }
  handlescroll();
  },[]);



  let initialpath  = 'M 0 30 Q 400 30 800 30';
  let finalpath  = 'M 0 30 Q 400 30 800 30';

  let secinitialpath  = 'M 300 80 Q 550 80 800 80';
  let secfinalpath  = 'M 300 80 Q 550 80 800 80';

  

  useGSAP(()=>{
    const svgmoving = (dets)=>{
    
      let initialpath = `M 0 30 Q ${dets.offsetX} ${dets.offsetY} 800 30`;
      gsap.to(firstsvgRef.current,{
        attr : {d : initialpath},
        duration : 0.2,
        ease : 'power3.out'
        
      })
    }
  svgRef.current.addEventListener('mousemove',svgmoving , {passive : true});
  
  const svgout = ()=>{
    gsap.to(firstsvgRef.current,{
      attr : {d : finalpath},
      duration : 1.5,
      ease : 'elastic.out(1.0.2)'
      
    });
  };
  svgRef.current.addEventListener('mouseleave',svgout , {passive : true});

  const secsvgmoving = (dets)=>{
    
    let secinitialpath = `M 300 80 Q 550 ${dets.offsetY} 800 80`;
    gsap.to(secondsvgRef.current,{
      attr : {d : secinitialpath},
      duration : 0.2,
      ease : 'power3.out'
      
    })
  }
svgRef.current.addEventListener('mousemove',secsvgmoving , {passive : true});
  
const secsvgout = ()=>{
  gsap.to(secondsvgRef.current,{
    attr : {d : secfinalpath},
    duration : 1.5,
    ease : 'elastic.out(1.0.2)'
    
  });
};
svgRef.current.addEventListener('mouseleave',secsvgout , {passive : true});


  return ()=> {
    svgRef.current.removeEventListener('mousemove',svgmoving,{passive : true});
    svgRef.current.removeEventListener('mousemove',secsvgmoving,{passive : true});
    svgRef.current.removeEventListener('mousemove',svgout,{passive : true});
    svgRef.current.removeEventListener('mousemove',secsvgout,{passive : true});
  }
},[]);






 
  return (
    <section ref  = {aboutpageRef} id="about"  className = "container">
      <div className="about-box">
        <h6 ref={pagecountRef} style={{ fontSize : '1rem', position : 'absolute' , top : '7vw', color :"var(--yellow)"}}><pre style={{color : 'var(--blackscreentextcolor)', display : 'inline-block'}}>02 </pre>/ 05</h6>
        
        <h3 ref={aboutheadRef} className='headline-text'>About me</h3>
        <div className="about-box-2ndhead">
          <h5>PASSIONATE</h5>
          <h5>Apathetic</h5>
          <h5>achiever</h5>
          <h5>BELEIVER</h5>
        </div>
        <div className="line" style={{width :'100%',display :'flex', flexDirection : 'column',alignItems : 'flex-end'}}>
        <svg ref={svgRef} width="800" height="160" >
            <path ref={firstsvgRef} d="M 0 30 Q 400 30 800 30" stroke="black" fill="transparent"/>
            <path ref={secondsvgRef} d="M 300 80 Q 550 80 800 80" stroke="black" fill="transparent"/>
          </svg>
            {/* <hr  style={{width : "60%" , margin : '0 0 3vh 0'}}/>
            <hr  style={{width : "30%"}}/> */}
        </div>
        <div className="about-box-text">
        <div className="about-box-text-pic">
              <img src={logo} alt="akashLogo" />
        </div>

          <div className="about-box-text-descrip">
              <h3>Full-stack Developer</h3>
              <p> Hello! I’m Akash Bindhani, a graduating student with a passion for full-stack development. Over the past year, I’ve immersed myself in the world of React.js, contributing to exciting projects and honing my skills. I have experience working on a projects using technologies like React, NodeJS, Express and MySQL. As a dedicated developer, I firmly believe that possessing strong skills is the key to staying ahead. My goals is to build user-friendly applications that provide value to users. I'm passoionate about learing new technologies and solving problems.”
              </p>
          </div>

         
          {/* <hr style={{transform:'rotate(10deg)'}}/> */}
        </div>
      </div>
    
    </section>
  )
}

export default About
