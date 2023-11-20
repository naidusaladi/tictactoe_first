import React, {useContext,useState} from "react"
import {store} from '../../App'

import './Landing.css'
const Landing = () => {
  const [data,setData]=useContext(store)
  const [click,setClick]=useState(false)
  const right={backgroundColor:"white",color:"black"}
  const left={backgroundColor:"#0e1f2f",color:"white"}

  const HandleClickX=()=>{
    setClick(true)
    setData(1)
  }
  const HandleClickO=()=>{
    setClick(false)
    setData(0)

  }
  return (
    <div >
      <div className='landingContainer'>
        <div className='landingLogo'>X O</div>
        <div className='pickCard'>
            <div className='pickTitle'>PICK PLAYER</div>
            <div className='pickBtn'>
                <button className='pickX default'  style={click?right:left}  onClick={HandleClickX}>X</button>
                <button className='pickO default' style={click?left:right} onClick={HandleClickO}>O</button>
            </div>

        </div>
        <div>
            <button className='playBtn'>NEW GAME (VS CPU) </button>
            <button className='playsoonBtn'>NEW GAME (VS HUMAN) Comming soon</button>
        </div>

         <button className='invitationBtn'>Invite your friend</button>
      </div>
       
    </div>
  )
}

export default Landing
