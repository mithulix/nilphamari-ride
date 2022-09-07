import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NoMatch() {

    //css
    const NoMatchCss = {textAlign: "center",backgroundColor : "white", marginTop: "15%", fontSize: "1.3rem"};
    const titleBtn = {textDecoration: 'none', color:"white", backgroundColor:"#ff6572"};

    return (
        <Container style = {NoMatchCss}>
            <h1>404</h1>
            <h4>This Page could not be loaded</h4>
            <p>SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST,<br/> 
                HAVE BEEN REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE.
            </p>
            <Link to="/home"><Button variant="contained" style={titleBtn}>GO TO HOMEPAGE</Button></Link>
        </Container>
    );
};