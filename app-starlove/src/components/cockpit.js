import React from 'react'
import cockpitImg from '../cockpit.jpg'
import StartBtn  from './cockpitBtn.js'
import '../index.css'


console.log(this.state)

const style = {
  backgroundImage:`url(${cockpitImg})`, 
  backgroundSize:'cover',
  backgroundPosition:'center',
  height: '50vw',
}

const Cockpit =  props =>  {
  return <div className="backgroundImg" style={style}>
    <StartBtn/>
  </div>
}

 

export default Cockpit
