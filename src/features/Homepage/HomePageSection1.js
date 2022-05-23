import {Container, Col, Row} from 'reactstrap';
import pool from '../../app/assets/img/pool.jpg' 


const HomePageSection1 = () => {
    return (
        <Container>
            <Row className='home-row-content'>
                <Col md='5'>   
                <h3>Welcome to Green Pines</h3>
                <p>In the heart of Grapevine Texas, Green Pine provides unparalleled convenience to Dallas, Fort Worth and the DFW Airport. 
                    Our pet-friendly community is located minutes from historic downtown Grapevine and Grapevine Lake.  Amenities include an outdoor lounge,
                    courtyard, business center and an expansive resident clubhouse. Green Pines offers a lifestyle abundant with year-round 
                    recreation, exquisite shopping and distinctive dining.</p>
            
                </Col>

                <Col md='5'>
                    <img  src={pool} alt="Green Pine Apartment Complex Pool"></img>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePageSection1;