import React, { forwardRef, useRef } from 'react'
import './Textrunner.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Textrunner = () => {

    const textrunnerRef = useRef();
    useGSAP(()=>{
        const handlescroll =(dets) =>{
            
                if(dets.deltaY >0){
                    gsap.to(".textrunner-box",{
                        transform : 'translateX(-400%)',
                        repeat : -1,
                        duration : 15,
                        ease : 'none'
                        
                    })
                }
                else{
                    gsap.to('.textrunner-box',{
                        transform : 'translateX(0%)',
                        repeat : -1,
                        duration : 5,
                        ease : 'none'
                    })
                }
               
        }

       window.addEventListener('wheel',handlescroll,{passive : true});

        gsap.from(textrunnerRef.current , {
            x: 23,
            opacity : 0,
            duration : 1.5,
            delay : 2.3
        })

       return ()=>{
        window.removeEventListener('wheel',handlescroll, {passive : true})
       }

    })
  return (
   <section ref={textrunnerRef}  id='textrunner'>
    <div className="textrunner-box">
        
        <h1>Akash</h1>
        
        <h1>Bindhani</h1>
        
        
    </div>
    <div className="textrunner-box">
        
        <h1>Akash</h1>
        
        <h1>Bindhani</h1>
        
        
    </div>
    <div className="textrunner-box">
        
        <h1>Akash</h1>
        
        <h1>Bindhani</h1>
        
        
    </div>
    <div className="textrunner-box">
        
        <h1>Akash</h1>
        
        <h1>Bindhani</h1>
        
        
    </div>
    <div className="textrunner-box">
        
        <h1>Akash</h1>
        
        <h1>Bindhani</h1>
        
        
    </div>
    <div className="textrunner-box">
        
        <h1>Akash</h1>
        
        <h1>Bindhani</h1>
        
        
    </div>
    <div className="textrunner-box">
        
        <h1>Akash</h1>
        
        <h1>Bindhani</h1>
        
        
    </div>
    <div className="textrunner-box">
        
        <h1>Akash</h1>
        
        <h1>Bindhani</h1>
        
        
    </div>
    <div className="textrunner-box">
        
        <h1>Akash</h1>
        
        <h1>Bindhani</h1>
       
    </div>
    <div className="textrunner-box">
       
        <h1>Akash</h1>
        
        <h1>Bindhani</h1>
     
    </div>
    <div className="textrunner-box">
       
        <h1>Akash</h1>
        
        <h1>Bindhani</h1>
     
    </div>
    <div className="textrunner-box">
       
        <h1>Akash</h1>
        
        <h1>Bindhani</h1>
     
    </div>
    <div className="textrunner-box">
       
        <h1>Akash</h1>
        
        <h1>Bindhani</h1>
     
    </div>
    <div className="textrunner-box">
       
        <h1>Akash</h1>
        
        <h1>Bindhani</h1>
     
    </div>
    <div className="textrunner-box">
       
        <h1>Akash</h1>
        
        <h1>Bindhani</h1>
     
    </div>
    <div className="textrunner-box">
       
        <h1>Akash</h1>
        
        <h1>Bindhani</h1>
     
    </div>
    <div className="textrunner-box">
       
        <h1>Akash</h1>
        
        <h1>Bindhani</h1>
     
    </div>
    <div className="textrunner-box">
       
        <h1>Akash</h1>
        
        <h1>Bindhani</h1>
     
    </div>
   </section>
  )
}

export default Textrunner
