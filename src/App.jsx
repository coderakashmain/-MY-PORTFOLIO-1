
import './App.css'
import AboutusRefContext from './Context/AboutusRefContext/AboutusRefContext';
import HomeP from './Pages/Home-T/HomeP'
import LocomotiveScroll from 'locomotive-scroll';


const App=()=> {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <AboutusRefContext>
      <HomeP/>
    </AboutusRefContext>
    </>
  )
}

export default App
