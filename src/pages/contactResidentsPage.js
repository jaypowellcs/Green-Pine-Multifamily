import ContactForm from "../features/Contact/ContactForm";
import {Container, Col, Row, Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const ContactResidentsPage = () => {
    return (
        <Container>
            <Row>
                <h3>Contact Us</h3>
                <p><strong>Are you a current resident?</strong>If so, click here to contact us and find answers to common questions.</p>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                        <CardTitle tag="h5">
                            For leasing information, please fill out the form below. 
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                        
                        </CardSubtitle>
                        <ContactForm></ContactForm>
                        </CardBody>
                    </Card>
                </Col>
                

                <Col>
                    <ul>
                        <li> Phone Number(833) 245-0783</li>
                    </ul>
                    <br></br>
                    <ul>
                        <li>Monday: 9 AM to- 6 PM
                        </li>

                        <li>
                        Tuesday: 9 AM to- 6 PM
                        </li>

                        <li>
                        Wednesday: 9 AM to- 6 PM
                        </li>

                        <li>
                        Thursday: 9 AM to- 6 PM
                        </li>

                        <li>
                        Friday: 9 AM to- 6 PM
                        </li>

                        <li>
                        Saturday: 10 AM to- 5 PM
                        </li>

                        <li>
                        Walk-ins welcome!
                        </li>
                    </ul>
                    <br></br>
                    <ul>
                        <li>
                            Bexley Grapevine
                            3535 Bluffs Lane
                            Grapevine, TX 76051
                        </li>

                        <li>
                            Fax: (817) 756-5567
                        </li>

                        <li>
                            Maintenance: (817) 601-8652
                        </li>

                        <li>
                            Property: (833) 245-0783
                        </li>
                    </ul>
                    <br></br>
                </Col>
            </Row>    
        </Container>
    );
};

export default ContactResidentsPage; 