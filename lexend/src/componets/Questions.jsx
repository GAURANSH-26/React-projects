import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

const Questions = () => {
    const [open,setOpen]=useState(null)

    const handleOpenClose=(index)=>{
        setOpen(open === index ? null : index)
    }

    const ques = [
      {
        question:'Do i need to know about how to code?',
        ans:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore excepturi, '
      },
      {
        question:'Do i need to know about how to code?',
        ans:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore excepturi, '
      },
      {
        question:'Do i need to know about how to code?',
        ans:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore excepturi, '
      },
      {
        question:'Do i need to know about how to code?',
        ans:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore excepturi, '
      },
      {
        question:'Do i need to know about how to code?',
        ans:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore excepturi, '
      },
      {
        question:'Do i need to know about how to code?',
        ans:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore excepturi, '
      },
    ]
  return (
    <div>
      <center>
        <h1>Frequently asked questions:</h1>

        <Card  style={{width:'60%',backgroundColor:'var(--skin-color)', borderRadius:'20px'}}>
        {ques.map((items,index)=>(
            <Card.Body key={index} style={{textAlign:'left'}}>
            <div className='d-flex justify-content-between'>
            <h5>{items.question}</h5>
            <Button 
             onClick={() => handleOpenClose(index)}
            style={{
               width: '20px',
               height: '20px',
               borderRadius: '50%',
               padding: 0,
               fontSize: '12px', 
               backgroundColor: '#007bff',
               borderColor: '#007bff',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               backgroundColor:'grey',
               border:'none'
      }}>+</Button>
            </div>
            <p className={`collapse ${open===index ? 'show' : ''}`}>{items.ans}</p>
            </Card.Body>
        ))}
        </Card>
      </center>
    </div>
  )
}

export default Questions
