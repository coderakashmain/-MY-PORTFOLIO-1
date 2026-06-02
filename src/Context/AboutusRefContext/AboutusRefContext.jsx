import React, { createContext,useState } from 'react'



export const AboutusRefdata = createContext();
const AboutusRefContext = (props) => {

    const [aboutuspageData, setAboutuspageData] = useState(null);
   
  return (
    <AboutusRefdata.Provider value = {{aboutuspageData,setAboutuspageData}}>
        {props.children}
    </AboutusRefdata.Provider>
  )
}

export default AboutusRefContext
