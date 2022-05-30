import {Container, Row, ListGroup, ListGroupItem} from 'reactstrap';
import Rentersinsurance from '../../app/assets/img/rentersinsurance.jpg';
import Rentersinsurancebutton from '../../app/assets/img/rentersinsurancebutton.jpg';

const FaqInsurance= () => {
    return (
        <Container>
            <Row>
                <a href='https://assurantrenters.com/' className='p-1 m-2' target='_blank' rel="noreferrer"><img className='img-fluid' src={Rentersinsurance} alt="Renters Insurance Logo" ></img></a>
            </Row>

            <Row className='insurance-row-content'>
                <h3>RENTERS INSURANCE: WHAT YOU NEED TO KNOW</h3>
                <p>Renters insurance is insurance coverage designed specifically for renters. We require that every resident have a renters liability insurance policy with $100,000 in liability coverage. We also highly recommend that you get coverage for your personal belongings. None of us expect or want an unfortunate event to happen to us, but renters insurance can protect you if something does occur.</p>
            </Row>

            <Row className='insurance-row-content'>
                <h3>WHAT DOES RENTERS INSURANCE COVER AND HOW MUCH DOES IT COST?</h3>
                <p>Policies can cover a variety of events including fire, lightning strike, vandalism and theft. Prices vary depending on the amount and type of coverage, but can be as little as $12 per month.</p>
            </Row>

            <Row className='insurance-row-content'>
                <h3>WHY IS LIABILITY INSURANCE REQUIRED?</h3>
                <p>It provides financial protection to you when you accidentally damage or destroy the property. For example, if you are at fault for a fire, then you are financially responsible for the damage to your apartment and any other apartments damaged by the fire. Unfortunately, accidents do occur and liability due to resident negligence falls upon the resident. One accident can make you liable for thousands of dollars.</p>
            </Row>

            <Row className='insurance-row-content'>
                <a href='https://assurantrenters.com/' className='p-1 m-2' target='_blank' rel="noreferrer"><img className='img-fluid' src={Rentersinsurancebutton} alt="Renters Insurance Button"></img></a>
            </Row>

            <Row className='insurance-row-content mt-1 p-1'>
                <p>We are partnered with Assurant to provide quality renters insurance at a reasonable price.</p>
                <ListGroup numbered flush>
                    <ListGroupItem>
                    <strong>Go to <a href="https://assurantrenters.com/" target='_blank' rel="noreferrer">insuranceformyplace.com</a> and click "Get a Quote"</strong> after selecting your state and community. 
                    </ListGroupItem>

                    <ListGroupItem>
                    <strong>Select a policy to add liability coverage and choose your payment plan.</strong> Be sure that your policy has a minimum of $100,000 in liability coverage.
                    </ListGroupItem>

                    <ListGroupItem>
                    <strong>Enter your information;</strong> including listing your community's name and physical address as the additional interested party. Assurant will then email us a copy of your policy and youre all set!
                    </ListGroupItem>
                </ListGroup>
                <p>Please know that you may obtain renters insurance through any company of your choosing.</p>
                <p>The most important thing is that you have coverage during your entire residency!</p>
            </Row>
        </Container>
    );
};


export default FaqInsurance; 