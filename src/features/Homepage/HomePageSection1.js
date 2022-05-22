import {Container, Col, Row} from 'reactstrap';
//import Logo from '../../app/assets/img/logo2';


const HomePageSection1 = () => {
    return (
        <Container>
            <Row>
                <Col md='5'>   
                <h3>Welcome to Green Pines</h3>
                <p>In the heart of Grapevine Texas, Green Pine provides unparalleled convenience to Dallas, Fort Worth and the DFW Airport. 
                    Our pet-friendly community is located minutes from historic downtown Grapevine and Grapevine Lake.  Amenities include an outdoor lounge,
                    courtyard, business center and an expansive resident clubhouse. Green Pines offers a lifestyle abundant with year-round 
                    recreation, exquisite shopping and distinctive dining.</p>
            
                </Col>

                <Col md='5'>
                    <img className='navbar-brand' src={''} alt="Green Pine Apartment Complex"></img>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePageSection1;