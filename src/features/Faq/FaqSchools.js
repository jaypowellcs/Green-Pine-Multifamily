
import {Container, UncontrolledAccordion, AccordionBody, AccordionItem, AccordionHeader, Row} from 'reactstrap';

const FaqSchools= () => {
    return (
        <Container>
            <Row className='p-1 m-2'>
            <h3>UTILITIES AND SCHOOLS</h3>
            <p>Questions regarding the utilities and schools? We're here to help!</p>

            <p>Click on one of the questions below to learn more!</p>
            </Row>
            <UncontrolledAccordion defaultOpen="1" className='p-1 m-2'>
                <AccordionItem>
                    <AccordionHeader targetId="1">
                    Cable/Telephone/Internet
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                    AT&T (469) 316-2101 
                    <a href='https://www.att.com/fiber-internet-offer/ultrafast/' target='_blank' rel="noreferrer"> http://www.att.com/residents</a>
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="2">
                    Electricity 
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                    <a href='https://www.powertochoose.org/' target='_blank' rel="noreferrer">https://www.powertochoose.org</a>
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="3">
                    Water/Sewer
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                    No setup necessary. Utility will be connected automatically.
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="4">
                    Elementary School
                    </AccordionHeader>
                    <AccordionBody accordionId="4">
                    Silver Lake Elementary School
                    1301 N. Dooley St.
                    Grapevine, TX 76051
                    817.251.5750
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="5">
                    Middle School
                    </AccordionHeader>
                    <AccordionBody accordionId="5">
                    Grapevine Middle School
                    301 Pony Parkway
                    Grapevine, TX 76051
                    817.251.5660
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="6">
                    High School
                    </AccordionHeader>
                    <AccordionBody accordionId="6">
                    Colleyville Heritage High School
                    5401 Heritage Avenue
                    Colleyville, TX 76034
                    817.305.4700
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="7">
                    School System Website
                    </AccordionHeader>
                    <AccordionBody accordionId="7">
                    <a href='https://www.gcisd.net/' rel="noreferrer" target='_blank'>Grapevine-Colleyville Independent School District</a>
                    </AccordionBody>
                </AccordionItem>
            </UncontrolledAccordion>
        </Container>
    );
};


export default FaqSchools; 