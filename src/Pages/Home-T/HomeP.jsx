import About from './About-S/About'
import Home from './Home-S/Home'
import Skills from './Skills/Skills'
import Service from './Service-S/Service'
import Contact from './Contact-S/Contact'
import Footer from './Footer/Footer'
import MessageAnim from '../../conponent/MessageAnimation/MessageAnim'
import { useState,useEffect } from 'react'


const HomeP=()=> {
  const [truevalue,setTruevalue] = useState(false);

  useEffect(()=>{
    if(window.innerWidth < 850){
      setTruevalue(true)
    }else{
      setTruevalue(false);
    }
  },[])
  return (
 <>
  {truevalue ? (<div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', height  :'100vh', width : "100%", background : 'white'
  }}>Please Open in Desktop.</div>) : (
    <div>
    <Home />
     <About/>
     <Skills/>
     <Service/>
     <Contact/>
     <Footer/>
     </div>
  )}
   
 </>
  )
}
export default HomeP
