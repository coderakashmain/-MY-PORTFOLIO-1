import React, { useRef } from 'react'
import './Curser.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Curser = () => {
    const curser = useRef();
    useGSAP(()=>{
      let servicesbox = document.querySelector('.services-items-box')
      servicesbox.addEventListener('mouseover',()=>{
        curser.current.style.transform = "scale(1)";
        curser.current.style.opacity = "1";
        // console.log('hwllo');
      })
      servicesbox.addEventListener('mouseleave',()=>{
        curser.current.style.transform = "scale(0)";
        curser.current.style.opacity = "0";
        // console.log('hwllo');
      })
      
      
        window.addEventListener('mousemove',(ele)=>{
            gsap.to(curser.current,{
              x:ele.x,
              y:ele.y,
              duration :0.1,
              ease: 'none'
            })
          })
      
      })
  return (
        <div ref={curser} id="services-curser"></div>
      
  )
}

export default Curser
