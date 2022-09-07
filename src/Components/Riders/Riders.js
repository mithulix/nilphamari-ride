import { useContext } from 'react';
import { Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';


export default function Riders(props) {
  const [riderDetails, setRiderDetails] = useContext(userContext);
  const { type, image, riderType} = props.rider;

  //css
  const linkUnderline= {textDecoration: "none",};
  const vehicleBox= {backgroundColor: "#ffffff", padding:" .5rem 2rem", borderRadius: ".8rem",};
  const vehicleBoxH5 = {textAlign: "center", marginTop: "1rem", lineHeight: ".5rem", color: "black",};
  const vehicleBoxImg = {width: "8rem", height: "8rem",}

    return (
        <div>
          <Container className="ridersCss">
            <Link to={`/rider/${riderType}`} style={linkUnderline}>
              <Col style={vehicleBox}> 
                <img src={image} style={vehicleBoxImg} alt="Vehicle"/>
                <h5 style={vehicleBoxH5}>{type}</h5>
              </Col>
            </Link>
          </Container>
        </div>
    );
};
