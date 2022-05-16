import {Container, Row} from 'reactstrap';
import background from '../app/assets/img/pooldusk.webp';

const HomePage = () => {
    return (
        <Container>
            <Row >
                <div style={{ backgroundImage: `url(${background})` }}>
                </div>
            </Row>
            <Row>
            <h3>
                BEXLEY GRAPEVINE APARTMENTS AND TOWNHOMES
                </h3>
                <p>
                Life often leads in you in an unexpected direction. Establish a home where you land in luxury surrounded by what you desire. Bexley Grapevine offers an unparalleled location convenient to both Dallas and Fort Worth. Located in Grapevine, Bexley Grapevine positions residents near sought after restaurants, high-end shopping, and entertainment venues.
                </p>
            </Row>
            <Row>
                <h3>
                RELAX, YOU'RE HOME
                </h3>
                <p>
                Our community was designed with your comfort and convenience in mind
                </p>
            </Row>
            <Row>
                <h3>
                AMENITIES
                </h3>
                <h5>
                You'll love our variety of community and apartment amenities.    
                </h5>
                <p>
                24-Hour Resident Clubhouse with Coffee Bar
                24-Hour Resident Lounge with Kitchenette
                24-Hour Business Center with Computers and Wireless Printing
                Stainless Steel Appliances
                Landry Package: White Quartz Countertops, White Cabinets, White Tile Backsplash
                Parcells Package: Cream Quartz Countertops (kitchen), Espresso Cabinets, Gray Brick Backsplash, Gray Quartz Countertops (bathroom)
                </p>
            </Row>
        </Container>
    );
};

export default HomePage