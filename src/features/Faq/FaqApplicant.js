import {Container, UncontrolledAccordion, AccordionBody, AccordionItem, AccordionHeader, Row} from 'reactstrap';

const FaqApplicant= () => {
    return (
        <Container >
            <Row className='p-1 m-2'>
            <h3>APPLICANT FAQ</h3>
            <p>Questions regarding the application process? We're here to help!</p>

            <p>Click on one of the questions below to learn more!</p>
            </Row>
            <UncontrolledAccordion defaultOpen="1" className='p-1 m-2'>
                <AccordionItem >
                    <AccordionHeader targetId="1">
                    Who should I include on my application?
                    </AccordionHeader>
                    <AccordionBody accordionId="1" >
                    You should include everyone who will be living in the apartment, including those under the age of 18 and guarantors (if applicable).  Everyone 18 and older will be listed as a leaseholder for your apartment.   
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="2">
                    What if I forgot to add someone to my application?
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                    Be sure to contact us to let us know you added someone so we can ensure they are included in the approval process.
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="3">
                        How do I pay additional application-related fees and deposits?
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                    When you login to your application, any outstanding charges will appear so you can easily make a payment.
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="4">
                    When can I expect to hear from the Leasing Office regarding my application?
                    </AccordionHeader>
                    <AccordionBody accordionId="4">
                    We will contact you as quickly as possible! We know that youll be waiting to hear from us and our goal is to make this a fast and easy process for you.
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="5">
                    How do I sign my lease?
                    </AccordionHeader>
                    <AccordionBody accordionId="5">
                    We have electronic lease signing which is super easy and convenient!

                    After your application is approved, each leaseholder will receive an email with instructions to review and electronically sign the lease.
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="6">
                    How much will my first payment be?
                    </AccordionHeader>
                    <AccordionBody accordionId="6">
                    Once your application has been approved, we will contact you by phone and send you a welcome letter via email, which will include the amount of your first payment and other important information about your move.
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="7">
                    If I have a question that isn't covered above, who should I contact?
                    </AccordionHeader>
                    <AccordionBody accordionId="7">
                    We are here to help you! We welcome you to contact us at the leasing office.
                    </AccordionBody>
                </AccordionItem>
            </UncontrolledAccordion>
        </Container>
    );
};


export default FaqApplicant; 