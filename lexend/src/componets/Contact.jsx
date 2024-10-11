import React from 'react'
import { CardGroup, Col, Form, FormControl, FormGroup, Row,Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const Contact = () => {
    return (
        <div>
            <center>
                <h1 style={{ margin: '30px 0px' }}>Let's get in touch.</h1>
                <p></p>Feel free to reach out us the option below, and our deicated team will responce to your inquiries promptly.
                <CardGroup className='m-5' >
                    <Card className="bg-dark text-white" style={{borderRadius:'30px', overflow:'hidden', zIndex:'5', border:'none'}}>
                        <Card.Img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://media.istockphoto.com/id/1833005849/photo/woman-smile-on-computer-and-call-center-communication-customer-service-or-e-commerce-support.jpg?s=2048x2048&w=is&k=20&c=AeVSd4AnJZF81uwBhYsnZQOL4TNAbjiWA4Dh4ChNjjw=" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card style={{padding:'5rem 3rem', borderRadius:'30px', position:'relative', right:'3rem', border:'none', backgroundColor:'var(--skin-color)'}}>
                       <div style={{width:'80%', marginLeft:'4rem'}}>
                       <p>Have a question or feedback? fill out the form below, and we'll get back to you as soon as possible.</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Row>
                                <Col><Form.Control type='text' placeholder=' Full Name'/></Col>
                                <Col><Form.Control type="email" placeholder=" Your Email " /></Col>
                                </Row>
                                <Form.Control className='mt-3' type='text' placeholder=' Subject'/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" placeholder='Your message' rows={3} />
                            </Form.Group>
                            <Button variant="success w-100" >Send Message</Button>
                            
                        </Form>
                        <p>or drop us a message via<a href="" style={{textDecoration:'none', color:'green'}}>email</a></p>
                       </div>
                    </Card>
                </CardGroup>
            </center>
        </div>
    )
}

export default Contact
