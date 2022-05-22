import {Container, Row, Col} from 'reactstrap';
import AmenitiesIntro from '../features/Amenities/AmenitiesIntro';
import CommunityAmenities from '../features/Amenities/CommunityAmenities';
import ApartmentAmenities from '../features/Amenities/ApartmentAmenities';

const AmenitiesPage = () => {
    return (
        <Container>
            <Row>
            <AmenitiesIntro></AmenitiesIntro>
            <Col>
            <CommunityAmenities></CommunityAmenities>
            </Col>
            <Col>
            <ApartmentAmenities></ApartmentAmenities>
            </Col>
            </Row>
        </Container>
    );
};

export default AmenitiesPage; 