import React from 'react'
import cockpitImg from '../cockpit.jpg'
import StartBtn  from './cockpitBtn.js'
import '../index.css'

const style = {
  backgroundImage:`url(${cockpitImg})`,
  backgroundSize:'cover',
  backgroundPosition:'center',
  height: '50vw',
}

const Cockpit =  ({handleCall}, props) =>  {
  return <div className="backgroundImg" style={style}>
    <StartBtn handleCall={handleCall} />
  </div>
}



export default Cockpit
