import About from './About-S/About'
import Home from './Home-S/Home'
import Skills from './Skills/Skills'
import Textrunner from './MovingText/Textrunner'
import Service from './Service-S/Service'
import Contact from './Contact-S/Contact'
// import Curser from '../Curser/Curser'


const HomeP=()=> {
  return (
 <>
    {/* <Curser/> */}
    <Home />
    <About/>
    <Textrunner/>
    <Skills/>
    <Service/>
    <Contact/>
 </>
  )
}
export default HomeP
