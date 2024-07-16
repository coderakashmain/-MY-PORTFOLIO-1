import React, { forwardRef } from 'react'
import './Textrunner.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Textrunner = () => {
    useGSAP(()=>{
       window.addEventListener('wheel',(dets)=>{
        if(dets.deltaY > 0){
            gsap.to(".textrunner-box",{
                transform : 'translateX(-200%)',
                repeat : -1,
                duration : 8,
                ease : 'none'
                
            })
        }
        else{
            gsap.to('.textrunner-box',{
                transform : 'translateX(0%)',
                repeat : -1,
                duration : 8,
                ease : 'none'
            })
        }
       })
    })
  return (
   <section  id='textrunner'>
    <div className="textrunner-box">
        
        <h1>experiences</h1>
        
        <h1>experiments</h1>
        
        <h1>content</h1>
        
    </div>
    <div className="textrunner-box">
        
        <h1>experiences</h1>
        
        <h1>experiments</h1>
       
        <h1>content</h1>
    </div>
    <div className="textrunner-box">
       
        <h1>experiences</h1>
        
        <h1>experiments</h1>
     
        <h1>content</h1>
    </div>
   </section>
  )
}

export default Textrunner
