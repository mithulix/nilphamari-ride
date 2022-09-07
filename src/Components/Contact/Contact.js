import React from 'react';
import { Col, Container, FormControl, InputGroup, Row, Form, Button, Card} from 'react-bootstrap';


export default function Contact() {

    //css
    const InputCss ={backgroundColor:"#f1f1f1", borderRadius:".7rem", padding:"1rem",};
    const titleBtn = {textDecoration: 'inherit', color:"white", backgroundColor:"#ff6572",border:"none", fontWeight:"500"};

    return (
        <Container style={{marginTop:"7%"}}>
            <hr/>
            <Row>
            <Col></Col>
                <Col md={5} style={InputCss}>
                <Card.Title className="text-center mb-3">Contact Us</Card.Title>
                    <InputGroup size="md" className="mb-3">
                        <FormControl aria-label="Small" type="text" placeholder="Name"/>
                    </InputGroup>
                    <InputGroup size="md" className="mb-3">
                        <FormControl aria-label="Small" type="text" placeholder="Email"/>
                    </InputGroup>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Leave a comment" />
                    </Form.Group><br/>
                    <Button type="submit" size="md" style={titleBtn}>SEND</Button>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};