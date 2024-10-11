import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <div>
            <Container style={{fontWeight:'500',fontSize:'0.7em',color:'white' ,background:'black', padding:'5rem'}}>
                <Row>
                    <Col>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum nihil eligendi quidem aliquid explicabo ullam volup</Col>
                    <Col >
                        <ul style={{listStyle:'none',display:'grid',gap:'6px'}}>
                            <li>About</li>
                            <li>Pricing</li>
                            <li>Features</li>
                            <li>Integrations</li>
                            <li>Career</li>
                            <li>Contact</li>
                            <li>Contact v2</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul style={{listStyle:'none',display:'grid',gap:'6px'}}>
                            <li>Shop</li>
                            <li>With sideber</li>
                            <li>Product detail</li>
                            <li>Product detail v2</li>
                            <li>Cart</li>
                            <li>Checkout</li>
                            <li>Order confirmation</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul style={{listStyle:'none',display:'grid',gap:'6px'}}>
                            <li>Request a demo</li>
                            <li>Sign in</li>
                            <li>Sign in v2</li>
                            <li>Sign up</li>
                            <li>Sign up v2</li>
                            <li>Reset Password</li>
                            <li>Reset Password v2</li>
                        </ul>
                    </Col>
                    <Col>
                      <ul style={{listStyle:'none',display:'grid',gap:'6px'}}>
                        <li>Blog</li>
                        <li>Blog detail</li>
                        <li>FAQ</li>
                        <li>404</li>
                        <li>Coming Soon</li>
                        <li>Terms and services</li>
                        <li>Privacy policy</li>
                      </ul>
                    </Col>
                </Row>
            <div style={{display:'flex',justifyContent:'space-between', marginTop:'4rem'}}>
                <ul style={{listStyle:'none',display:'flex',gap:'6px'}}>
                    <li>Lexend @ 2024, All rights reserved.</li>
                    <li>Privacy notice</li>
                    <li>Legal</li>
                    <li>Cookie settings</li>
                </ul>
                <ul style={{listStyle:'none',display:'flex',gap:'15px',fontSize:'1.6em'}}>
                    <li><i class="bi bi-linkedin"></i></li>
                    <li><i class="bi bi-facebook"></i></li>
                    <li><i class="bi bi-twitter-x"></i></li>
                    <li><i class="bi bi-instagram"></i></li>
                    <li><i class="bi bi-youtube"></i></li>|
                </ul>
            </div>
            </Container>
        </div>
    )
}

export default Footer
