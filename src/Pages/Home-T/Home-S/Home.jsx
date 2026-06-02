
import { useContext, useEffect, useReducer, useRef } from "react";
import Nav from "../../../conponent/Navbar/Nav";
import "./Home.css";
import { useTypewriter } from "react-simple-typewriter";
import Textrunner from "../MovingText/Textrunner";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AboutusRefdata } from "../../../Context/AboutusRefContext/AboutusRefContext";




const Home = () => {

  const {aboutuspageData} = useContext(AboutusRefdata);
  
  const [text] = useTypewriter({
    words: ["Full Stack Web Developer"],
    loop: {},
    typeSpeed: 120,
    delaySpeed: 90,
  });


  const homeref = useRef();

  useEffect(()=>{
    const handleHomepage = ()=>{


    if(window.scrollY >=900 ){
      homeref.current.style.zIndex = "-1";

    }
    else{
      homeref.current.style.zIndex = "3";
    }
  }
  window.addEventListener('scroll',handleHomepage, {passive : true});

  return  () => window.removeEventListener('scroll',handleHomepage , {passive : true} );
},[]);

const pagecountRef = useRef();
const welocometextRef = useRef();
const introRef = useRef();
const ScrolldownRef = useRef();
const typwriterRef = useRef();
const homecontactRef = useRef();
const homofrontRef = useRef();

useEffect(()=>{
  const frontvisibility = ()=>{
    if(window.scrollY  <1){
      homofrontRef.current.style.zIndex = '-1';
    }
    if(window.scrollY >=60){
      homofrontRef.current.style.zIndex = '2';
    }
  }
  window.addEventListener('scroll',frontvisibility,{passive : true});

  return ()=> window.removeEventListener('scroll',frontvisibility, {passive : true});
},[]);


useGSAP(()=>{

    const tl=gsap.timeline();

    tl.from(pagecountRef.current , {
      x: -50,
      delay : 0.6,
      opacity : 0,
      duration : 0.5
    })
    .from(welocometextRef.current ,{
      x: 100,
      opacity : 0,
      duration : 0.4
    })
    .from(introRef.current ,{
      x: -500,
      opacity : 0,
      duration : 0.6,
      ease : 'ease-in-out',
      scale : 0.5
    },"same")
    .from(homecontactRef.current,{
      x: 200,
      opacity : 0,
      duration : 0.6,
      ease : 'ease-in-out',
      scale : 0.5
    },"same")
    .from(ScrolldownRef.current ,{
      y: -50,
      opacity : 0,
      duration : 0.6,
      ease : 'ease-in-out'
    })
    .from(typwriterRef.current ,{
      x: -50,
      opacity : 0,
      duration : 0.3,
      ease : 'ease-in-out'
    })
    .from('.home-btn a',{
      x: -50,
      opacity : 0,
      duration : 0.3,
      ease : 'ease-in-out',
      stagger:0.2
    })

    
},[])
  
useGSAP(()=>{
  if(aboutuspageData && homofrontRef.current){
    gsap.to(homofrontRef.current ,{
      background : 'black',
      duration : 0.5,
      scrollTrigger : {
        trigger : aboutuspageData,
        scroll : 'body',
        start : "top 85%",
        end : 'top 0%',
        scrub : 1
      }
    })
  }
  
},[aboutuspageData]);



  return (
    <>

      <Nav />
      <div  ref={homeref}  id="Home" className="container">


        <div className="intro" >
          <h6 ref={pagecountRef} style={{ fontSize: '1rem', color: "var(--yellow)", marginBottom: '2rem' }}><pre style={{ color: '#000', display: 'inline-block' }}>01 </pre>/ 05</h6>
          <p ref={welocometextRef}
            style={{
              fontSize: "0.8rem",
              color: "#000",
              marginBottom: "15px",
              fontWeight : '600',
              letterSpacing : '0.2rem'
            }}
            >
            HELLO EVERYONE!
          </p>
            < Textrunner />
          <h2 ref={introRef}>
            I'm{" "}
            <span>
              Akash <p>Bindhani</p>
            </span>
          </h2>
          <p ref={ScrolldownRef} style={{margin : '1rem 0 0 0', fontSize : '1rem',letterSpacing : '0.15rem'}}>Scroll down  to get more information!</p>
          <p ref={typwriterRef} style={{ fontSize: '2vw', fontWeight: '600', marginTop: "5rem" }}>
            I'm a{" "}
            <span>
              {text}
              {/* <Cursor /> */}
            </span>
          </p>
          <div className="btn home-btn" >
            
             
                <a href="https://github.com/coderakashmain" target='__blank'><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/akash-bindhani-7b71b9311/" target='__blank'><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/vanity__heart__81/" target='__blank'><i className="fa-brands fa-instagram"></i></a>
            
            
          </div>
        </div>
        <div className="pic" >
        {/* <div className="pic-box">
           
           <img src="src/Photos/finalphoto.jpg" alt="mypic" />
         </div> */}
        <div ref={homecontactRef} className="home-contact">
                <textarea rows="3"  placeholder="Describe your First impression" />
                <input type="button" value="Try me"/>
            </div>
          
        </div>
      </div>
      <div ref={homofrontRef} className="front"></div>
    </>
  );
};
export default Home;
