import {Col, Row} from 'reactstrap';
import PhotoCard from './PhotoCard';
import { selectAllPhotos } from './photosSlice';

const PhotoList = () => {
    const photos = selectAllPhotos();

    return (
        <Row className='ms-auto'>
            {photos.map((photo) => {
                return (
                    <Col md='5' className='m-4' key={photo.id}>
                        <PhotoCard photo={photo} />
                    </Col>
                );
            })}
        </Row>

    );
};

export default PhotoList; 