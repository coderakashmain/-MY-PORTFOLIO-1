import React from 'react'
import { Player } from "@lottiefiles/react-lottie-player";
import anim from '../../Photos/MessageAmimationPhoto/lottieflow-loading-07-1A9FF9-easey.json'


const MessageAnim = () => {
  return (
    <div style={ { height : '100vh' , width : '100%' , position : 'fixed' , top : '0rem' , left : '0rem' , background : '#000000cc', zIndex : '10000000', display : 'flex', alignItems  :'center' , justifyContent : 'center'
    }}>
      <Player  autoplay loop src={anim} style= {{ width : '7rem ' , height : '7rem'}}/>
    </div>
  )
}

export default MessageAnim
