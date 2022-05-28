import Calendar from 'react-calendar';
import {Container, Row, Col} from 'reactstrap';

const TourPage = () => {
    return (
        <Container>
            <Row>
                <Col md='5'>
                    <Calendar />
                </Col>
            </Row>
       </Container>
    );
};

export default TourPage; 