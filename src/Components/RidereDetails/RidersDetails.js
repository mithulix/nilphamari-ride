import { faCircle, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Col, Container, Row, Button, ButtonGroup, Card, Form} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GoogleMap from '../GoogleMap/GoogleMap';
import fakeData2 from "../../fakeData/fakeData2.json";



export default function RidersDetails() {
    const riderType = useParams().riderType || "Bike";
    const [startToEnd, setStartToEnd] = useState({});
    const [toggle, setToggle] = useState(true);
    const data = fakeData2;
    const [startDate, setStartDate] = useState(new Date());


    const {register, handleSubmit } = useForm();
    const onSubmit = data => {
        const location = startToEnd;
        location.startFrom = data.startFrom;
        location.endTo = data.endTo;
        setStartToEnd(location);
        setToggle(false);
    }


    //css
    const InputCss ={backgroundColor:"#f1f1f1", borderRadius:".7rem", padding:"1rem", height:"100%"};
    const titleBtn = {textDecoration: 'inherit', color:"white", backgroundColor:"#ff6572", border:"none", fontWeight:"500"};
    const vehicleBoxImg = {width: "4rem", height: "3rem"}
    const dot = {width:".5rem", marginLeft:"1rem", textAlign:"center"}
    const card = {padding:".6rem"}
    const title = {paddingTop:".8rem"}
    const mapCss = {width:"100%", height:"500px", border:"1px solid #f5f5f5", borderRadius:".7rem"}


    return (
        <Container style={{marginTop:"7%"}}>
            <hr/>
            <Row>
                <Col md={4} style={InputCss}>
                {(toggle) ? (
                    <Container>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Card.Title className="text-center mb-3">FIND DESTINATION</Card.Title>
                            <Form.Group controlId="formBasicEmail formBasicPassword">
                                <Form.Control {...register("startFrom")} className="mb-3" type="text" placeholder="Start here" required/>
                                <Form.Control {...register("endTo")} className="mb-3" type="text" placeholder="End here" required/>
                                <DatePicker className="mb-3 md" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </Form.Group>
                            <ButtonGroup className="d-grid gap-2 mb-2">
                                <Button type="submit" size="md"  style={titleBtn} value="Take a seat">Take a seat</Button>
                            </ButtonGroup>
                        </Form>
                    </Container>
                ):(
                    <Container >
                        <Row>
                            <Container>
                                <Col>
                                    <Card style={titleBtn} className="mb-3">
                                        <Card.Title><FontAwesomeIcon icon={faCircle} style={dot}/>&nbsp;{startToEnd.startFrom}</Card.Title>
                                        <Card.Title><FontAwesomeIcon icon={faCircle} style={dot}/>&nbsp;{startToEnd.endTo}</Card.Title>
                                    </Card>
                                </Col> 
                            </Container>
                            {
                                data !== null && data[riderType].map(vehicle => {
                                    return <Container>
                                            <Col className= 'd-flex gap-4 mb-3 bg-light' style={card}>
                                                <Card.Img src={vehicle.image} style={vehicleBoxImg}/>
                                                <Card.Title style={title}>{vehicle.riderType}</Card.Title>
                                                <Card.Title style={title}><FontAwesomeIcon icon={faUsers}/>&nbsp;{vehicle.capacity}</Card.Title>
                                                <Card.Title style={title}>{vehicle.cost}</Card.Title>
                                            </Col>
                                        </Container>
                                })
                            }
                        </Row>
                    </Container>
            )
        }
                </Col>
                {(toggle) ? (
                    <Col md={8}>
                        <section>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229549.70690044938!2d88.85389063538693!3d25.977412933261647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e35d6543ecac43%3A0x16c419af72bd1fd4!2sNilphamari%20District!5e0!3m2!1sen!2sbd!4v1623604577818!5m2!1sen!2sbd"  style={mapCss} allowfullscreen="" loading="lazy">
                            </iframe>
                        </section>
                    </Col>
                    ):(
                    <Col md={8}>
                        <section>
                            <GoogleMap/>
                        </section>
                    </Col>
                    )
                }
            </Row>
        </Container>
    );
};