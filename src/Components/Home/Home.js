import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import fakeData1 from '../../fakeData/fakeData1.json';
import Riders from '../Riders/Riders';
import './Home.css'


export default function Home() {
  const [riders, setRiders] = useState([]);
  useEffect(() => { setRiders(fakeData1)},[])

  return (
      <div>
          <img id="bgImg" alt=""/>
          <Container id="vehicleContainer">
          {
            riders.map(rider => <Riders key={rider.id} rider={rider}></Riders>)
          }
          </Container>
      </div>
    );
  }

