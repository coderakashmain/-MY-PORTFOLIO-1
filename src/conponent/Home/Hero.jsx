import { useEffect } from "react"
import "./Hero.css"
import Aos from 'aos/dist/aos'
import { useTypewriter,Cursor} from "react-simple-typewriter"
import mylogo from "../../Photos/mypiclogo2.png"


const Hero=(props)=> {
  const [text] = useTypewriter({
    words : ['Full Stack Web Devloper' , 'Software Engineer'],
    loop : {},
    typeSpeed : 120,
    delaySpeed : 90
  })
  useEffect(()=>{
      
      Aos.init({duration : 2000});
  },[])
  return (
    <div id="hero" className="container">
        <div className="intro" data-aos="fade-right">
          <p style={{fontSize : '0.8rem',color :"var(--yellow)",marginBottom : '15px'}}>HELLO EVERYONE!</p>
          <h2>I'm <span>Akash <p>
              Bindhani
            </p></span></h2>
            <p>Video</p>
            <p>I'm a <span>{text}<Cursor/></span></p>
            <div className="btn">
            <a href="https://www.linkedin.com/in/akash-bindhani-7b71b9311/" target="blank"> <button>MY LINKEDIN</button></a>
            <a href="https://www.instagram.com/vanity__heart__81/" target="blank"> <button>MY INSTAGRAM</button></a>
          </div>
        </div>
        <div className="pic" data-aos = "fade-down">
          <img src={mylogo} alt="" style={{height : '660px',
    filter: ' saturate(1.1) drop-shadow(0px 0px 22px var(--yellow)'}} />
          {/* <div className="pic-box">

          </div> */}
          
        </div>

      
    </div>
  )
}
export default Hero