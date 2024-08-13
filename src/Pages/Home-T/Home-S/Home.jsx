
import Nav from "../../../conponent/Navbar/Nav";
import "./Home.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Web Developer", "Software Engineer"],
    loop: {},
    typeSpeed: 120,
    delaySpeed: 90,
  });
  return (
    <>

      <Nav />
      <div id="Home" className="container">


        <div className="intro" >
          <h6 style={{ fontSize: '1rem', color: "var(--yellow)", marginBottom: '2rem' }}><pre style={{ color: '#fff', display: 'inline-block' }}>01 </pre>/ 05</h6>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--yellow)",
              marginBottom: "15px",
            }}
          >
            HELLO EVERYONE!
          </p>
          <h2>
            I'm{" "}
            <span>
              Akash <p>Bindhani</p>
            </span>
          </h2>
          <p>Video</p>
          <p style={{ fontSize: '2vw', fontWeight: '600', marginTop: "5rem" }}>
            I'm a{" "}
            <span>
              {text}
              <Cursor />
            </span>
          </p>
          <div className="btn" >
            
             
                <a href="https://github.com/coderakashmain" target='__blank'><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/akash-bindhani-7b71b9311/" target='__blank'><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/vanity__heart__81/" target='__blank'><i className="fa-brands fa-instagram"></i></a>
            
            
          </div>
        </div>
        <div className="pic" >
          <div className="pic-box">
            <img src="src/Photos/finalphoto.jpg" alt="mypic" />
          </div>
        </div>
      </div>
      <div className="front"></div>
    </>
  );
};
export default Home;
