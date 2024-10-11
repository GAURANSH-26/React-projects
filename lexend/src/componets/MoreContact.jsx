import React from 'react'
import ReachCard from './ReachCard'
import { CardGroup } from 'react-bootstrap'
import location from '../assets/location.png'
import message from '../assets/message.png'
import attherate from '../assets/at.png'
import team from '../assets/team-building.png'


const MoreContact = () => {
   const reachData = [
    {    
        image:location,
        title:'Visit us',
        text:'Don Valley, Toronto, CA',
        link:'View on maps '
    },
    {
        image:message,
        title:'Via Chat',
        text:'Get instant answers.',
        link:"Let's chat"
    },
    {
        image:attherate,
        title:'Report Issue',
        text:'Get priority support',
        link:'send report' 
    },
    {
        image:team,
        title:'Our Community',
        text:'Connect with users.',
        link:'Join us now'
    },
]
  return (
    <div>
      <center><h1>Other ways to reach us</h1></center>
      <CardGroup style={{margin:'6rem' ,gap:'2.5em'}}>
      <ReachCard content={reachData}/>
      </CardGroup>
    </div>
  )
}

export default MoreContact
