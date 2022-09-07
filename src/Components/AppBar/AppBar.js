import React, { useContext } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { Navbar,Nav, Button } from 'react-bootstrap';
import logo from '../images/NIL-01.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { userContext } from "../../App";
import { Container } from 'react-bootstrap';
import './AppBar.css';

// firebase imported files
import "firebase/auth";
import firebase from "firebase/app";
import firebaseConfig from "../Login/firebase.config";
if(firebase.apps.length === 0){ firebase.initializeApp(firebaseConfig);}




export default function AppBar () {
    const [LoggedInUser, setLoggedInUser] = useContext(userContext);
    const user = firebase.auth().currentUser;

    const brand = { width:"8rem"};
    const navbar = {position:"absolute", background:"transparent", boxShadow:"none",  width:"82%",};
    const titleChild = {fontWeight:"500", color:"#000", margin:"0 .7rem"}
    const titleBtn = {textDecoration: 'inherit',border:"none",  backgroundColor:"#ff6572", fontWeight:"500"}
    const nav = { marginLeft: 'auto'}


        return(
            <div>
                <Container className="appbar">
                    <div className="row">
                        <div className="col-md-12">
                            <Router>
                                <Navbar style={navbar} expand="lg" sticky="top">
                                    <Navbar.Brand href="/home"><img src={logo} style={brand} alt="logo"/></Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="mr-auto navXl" style={nav}>
                                        <Nav.Link href="/home" style={titleChild}>HOME</Nav.Link>
                                        <Nav.Link href="/home" style={titleChild}>DESTINATION</Nav.Link>
                                        <Nav.Link href="/blog" style={titleChild}>BLOG</Nav.Link>
                                        <Nav.Link href="/contact" style={titleChild}>CONTACT</Nav.Link>
                                        {user ? <Button style={titleBtn}>{user.displayName}&nbsp; <FontAwesomeIcon icon={faCaretDown}/></Button>  : <Button style={titleBtn} href="/login" >LOGIN</Button>}
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>
                            </Router>
                        </div>
                    </div>
                </Container>
            </div>
        )  
    }