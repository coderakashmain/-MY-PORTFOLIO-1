import React, { useEffect, useRef } from 'react'
import './Contact.css'
import LocomotiveScroll from 'locomotive-scroll';



const Contact = () => {
  const contactRef = useRef(null);
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: contactRef.current,
      smooth: true,
      lerp: 0.1, // Default lerp value, lower means smoother but slower scrolling
      multiplier: 1.5, // Speed multiplier
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  const emailAddress = "ab791235@gmail.com"; // Your email address
  const handleEmailButtonClick = () => {
    window.open(`mailto:${emailAddress}`, '_blank');
  };
  return (
    <>
    <section ref={contactRef} data-scroll  data-scroll-speed= '-0.2'  id="contact" className='container'>
       <h6 style={{ fontSize : '1rem', position : 'relative' , top : '7vw', color :"var(--yellow)"}}><pre style={{color : '#000', display : 'inline-block'}}>05 </pre>/ 05</h6>
        
          <div data-scroll   className="contact-box">
            <h1>Contact</h1>
            <div className="contact-box-inside">
              <div className="left-contact-box">
                <form action="#">
                  <h3>Send me a message</h3>
                  <p>*Denotes mandatory Fields</p>
                    <input type="text" name='name' placeholder='Name*' required/>
                    <input type="gmail" name='gmail' placeholder='Email*' required/>
                   <p style={{margin : '0rem 0 0.8rem 0'}}>Message*</p>
                    <textarea name="messge" id="" rows='4' cols='100' placeholder='Type message here...' required></textarea>
                    <button>Submit</button>
                </form>
                
              </div>
              <div data-scroll className="right-contact-box">
                  <div className="my-address">
                    <h2>My address</h2>
                      <div className="my-address-box">
                        <p>That is My Home</p>
                        <p>BL Bahlada, Baripada</p>
                        <p>Dist Mayurbhanj, Odisha , India</p>
                        <p>PS Tiring</p>
                      </div>
                    <h2>My Social</h2>
                    <div className="my-social">
                        <a href="https://github.com/coderakashmain" target='__blank'><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/akash-bindhani-7b71b9311/" target='__blank'><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/vanity__heart__81/" target='__blank'><i className="fa-brands fa-instagram"></i></a>

                    </div>
                    <h2>Email me</h2>
                    <div className="email-box">
                    <p>Visite me on My Social Media</p>
                    <p>You can Direct Email me on : <br /> <strong onClick={handleEmailButtonClick} >ab791235@gmail.com</strong> </p>
                    </div>
                  </div>
              </div>
          </div>
          </div>
         
    </section>
    <div id="contact-front"></div>
    
    </>                      
  )
}

export default Contact
