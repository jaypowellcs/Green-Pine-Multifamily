import {Container, Col, Row} from 'reactstrap';
import apartmentroom from '../../app/assets/img/apartmentroom.jpg';


const HomePageSection2 = () => {
    return (
        <Container>
            <Row className='home-row-content2'>
                <Col>
                    <img src={apartmentroom} alt="Green Pine Apartment Complex"></img>
                </Col>

                <Col>   
                <h3>Floor Plans</h3>
                <p>Come home to Green Pine's one-, two- and three-bedroom apartments in Grapevine, TX. Our apartment homes include private pet yards, kitchen islands, upgraded lighting, a built-in bar and built-in desks perfect for working from home.
                </p>
                     <ul>
                        <li>1 Bedroom</li>
                        <li>2 Bedroom</li>
                        <li>3 Bedroom</li>
                    </ul>
                    <ul>
                        <li>Starting at $1,760</li>
                        <li>Starting at $2,020</li>
                        <li>Starting at $3,045</li>
                    </ul>     
                </Col>
            </Row>
        </Container>
    );
};

export default HomePageSection2;