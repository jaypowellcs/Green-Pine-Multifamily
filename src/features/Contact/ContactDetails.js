import { Col, Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const ContactDetails = () => {
    return (
        <>
            <Col>
                <Card 
                body
                color="success"
                inverse
                className='mt-5'>
                    
                        <CardTitle tag="h5">
                            Schedule a Tour. See below schedules and contacts. 
                        </CardTitle>
                        <CardSubtitle
                            className="mt-2 p-2"
                            tag="h2" 
                        >
                        <i class="fa fa-phone-square" aria-hidden="true"> Phone Number(833) 245-0783</i>
                        
                        </CardSubtitle>
                        <CardSubtitle className="mb-2 p-2 "
                            tag="h2" >
                        <br></br>
                        <i class="fa fa-map-marker" aria-hidden="true"> Green Pines Apartment Complex
                            123 Main Street
                            Grapevine, TX 76051</i>
                        </CardSubtitle>
                        <CardBody
                        className="mt-2 p-2"
                        >
                            <ul>
                                <i class="fa fa-clock-o" aria-hidden="true"> Office Hours</i>
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
                            <i class="fa fa-fax" aria-hidden="true" ><a href="tel:+496170961709" style={{ color: 'rgba(255,255,255,.75)' }} > Fax: (817) 756-5567</a></i>
                            <br></br>
                            <i class="fa fa-phone" aria-hidden="true"><a href="tel:+496170961709" style={{ color: 'rgba(255,255,255,.75)' }} > Maintenance: (817) 601-8652</a></i>
                            <br></br>
                            <i class="fa fa-phone" aria-hidden="true"><a href="tel:+496170961709" style={{ color: 'rgba(255,255,255,.75)' }}  > Property: (833) 245-0783</a></i>
                                <br></br>
                        </CardBody>
                    </Card>
                </Col>
                </>
    );
};

export default ContactDetails;