import ContactForm from "../features/Contact/ContactForm";
import ContactDetails from '../features/Contact/ContactDetails';
import { Col, Container, Row } from 'reactstrap';


const ContactResidentsPage = () => {
    return (
    <Container>
        <Row>
            <Col md='6'>
        <ContactForm></ContactForm>
            </Col>

            <Col md='6'>
        <ContactDetails></ContactDetails>
            </Col>
        </Row>
    </Container>
    );
};

export default ContactResidentsPage; 