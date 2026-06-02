import React, {  useRef } from 'react'
import './Curser.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Curser = () => {
    const curser = useRef();
    useGSAP(()=>{
      const servicesbox = document.querySelector('.services-items-box')

      const curserenter = ()=>{
        curser.current.style.opacity = "1";
        curser.current.style.transform = "scale(1)";
        console.log('hwllo');
      }
      servicesbox.addEventListener('mouseenter',curserenter ,{passive : true});
      const curserleave = ()=>{
        curser.current.style.opacity = "0";
        curser.current.style.transform = "scale(0)";
        console.log('hwllo');
      }
      servicesbox.addEventListener('mouseleave',curserleave, {passive : true});
      

      const mousemove = (ele)=>{
        gsap.to(curser.current,{
          x:ele.x,
          y:ele.y,
          duration :0.05,
          ease: 'ease-in-out'
        })
      };
        window.addEventListener('mousemove',mousemove, {passive : true});

        return ()=>{
          servicesbox.removeEventListener('mouseenter', curserenter,{passive :true});
          servicesbox.removeEventListener('mouseleave', curserenter,{passive :true});
          window.removeEventListener('mousemove',mousemove,{passive : true})
        }
      
      },[]);
  return  (
        <div ref={curser} id="services-curser"></div>
      
  )
}

export default Curser
