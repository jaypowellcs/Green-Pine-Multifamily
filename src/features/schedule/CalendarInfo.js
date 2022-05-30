import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container, Row, Col, Card, CardTitle, CardText, Button, CardBody  } from 'reactstrap';

const CalendarInfo = () => {
    return (
        <Container>
            <Row>
                <Col md='6'>
                <Card
                    body
                    color="success"
                    inverse
                    className='p-1 m-5'
                >
                    <CardTitle tag="h5">
                        Schedule A Tour 
                    </CardTitle>

                    <CardText>
                        Click to schedule a tour of Green Pines with one of our staff 
                    </CardText>

                    <CardBody>
                    <Calendar className='' />
                    </CardBody>
                    <Button className='p-2 m-3 btn btn-light'>
                        Request to Tour 
                    </Button>
                </Card> 
                </Col>
            </Row>
        </Container>
    )
}

export default CalendarInfo;