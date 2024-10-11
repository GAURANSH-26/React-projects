import React from 'react'
import Card from 'react-bootstrap/Card';

const ReachCard = ({content}) => {
    return (
       <>
       {content.map((items,index)=>(
        <Card key={index} style={{backgroundColor:'var(--skin-color)' , border:'none',borderRadius:'10px'}}>
        <Card.Body style={{textAlign:'center',marginBottom:'2rem'}}>
        <Card.Img style={{width:'20%', margin:'3rem 0rem'}} src={items.image}/>
        <Card.Title>{items.title}</Card.Title>
        <Card.Text>{items.text}</Card.Text>
        <Card.Link style={{textDecoration:'none', color:'green', }} href="#">{items.link}&rarr;</Card.Link>
      </Card.Body>
      </Card> 
       ))}
       </>
    )
}
export default ReachCard


{/* <Card style={{ width: '14rem', borderRadius:'20px', backgroundColor:'var(--skin-color)'}}>
<Card.Body style={{textAlign:'center'}}>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build 
  </Card.Text>
  <Card.Link href="#">Card Link</Card.Link>
</Card.Body>
</Card> */}