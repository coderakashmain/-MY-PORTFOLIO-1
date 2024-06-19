import './Nav.css'
import nameicon from '../../Photoes/logo-text.png'

const Nav=()=> {
  return (
        <section id='home' className='container'>
      <nav>
          <div className="navbar" data-aos="fade-down">
              <div className=" nav-box icon">
                <img src={nameicon} alt="name-icon" />
              </div>
            <ul className="nav-box">
              <li className="nav-item"><a href="/">Home</a></li>
              <li className="nav-item"><a href="/">Service</a></li>
              <li className="nav-item"><a href="/">Projects</a></li>
              <li className="nav-item"> <a href="/">Skills</a></li>
              <li className="nav-item"><a href="/">About</a></li>
            </ul>
            <ul className="nav-box contact-btn">
            <a href="/"><li>Contact me</li></a>
            </ul>
          </div>
      </nav>
      
   </section>
  )
}
export default Nav