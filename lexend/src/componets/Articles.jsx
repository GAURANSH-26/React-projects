import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'


const Articles = () => {

  const article = [
    {
    image:`https://www.istockphoto.com/resources/images/PhotoFTLP/P5-iStock-2058305199.jpg`,
    tag:'Stratgy',
    title:'This is a longer card with supporting text below',
  },
    {
    image:`https://www.istockphoto.com/resources/images/PhotoFTLP/P5-iStock-2058305199.jpg`,
    tag:'Stratgy',
    title:'This is a longer card with supporting text below',
  },
    {
    image:`https://www.istockphoto.com/resources/images/PhotoFTLP/P5-iStock-2058305199.jpg`,
    tag:'Stratgy',
    title:'This is a longer card with supporting text below',
  },
]
   
  return (
    <div style={{ backgroundColor: 'var(--skin-color)', width: '90%', margin: 'auto' }}>
      <center style={{margin:'5rem 0 0 0'}}>
        <h2 style={{ fontWeight: "bold", margin: '3rem 0rem' }}>Gain Valuble insights</h2>
        <CardGroup >
        
        {article.map((item,index)=>(

          <Card key={index} className='m-3' style={{borderRadius:'20px'}}>
            <span style={{position:'absolute',top:'11px',left:'20px',background:'green',borderRadius:'5px',padding:'0px 9px',fontSize:'x-small',color:'white', fontWeight:'bold',margin:'8px 0px'}}>
              {item.tag}
              </span>
        
            <Card.Img variant="top" src={item.image} style={{width:'93%', margin:'10px auto', borderRadius:'10px'}} />
            <Card.Body>
              <Card.Title style={{fontWeight:'bold'}}>{item.title}</Card.Title>
            </Card.Body>
              <div style={{display:'flex', margin:'auto', fontSize:'11px'}}>
                <img src={item.image} alt="" style={{height:'20px',width:'20px',borderRadius:'50%', objectFit:'cover'}}/>
                <p style={{fontWeight:'bold', margin:'0px 8px'}}>Gauransh</p>.
                <p>April 3, 2024</p>
              </div>
          </Card>
        ))}
          
        </CardGroup>
        <a style={{textDecoration:'none', color:'green', fontWeight:'bold'}} href="#">View more article&rarr;</a>
      </center>
    </div>
  )
}

export default Articles
