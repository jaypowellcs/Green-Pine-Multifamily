import {UncontrolledCarousel, Container} from 'reactstrap';
//import pooldusk from 'app/assets/pooldusk.webp';

const HomepageCarousel = () => {
    return (
        <Container fluid>
        <UncontrolledCarousel
            items={[
                {
                altText: '',
                caption: '',
                key: 1,
                src: 'https://picsum.photos/id/123/1200/600'
                },
                {
                altText: '',
                caption: '',
                key: 2,
                src: 'https://picsum.photos/id/456/1200/600'
                },
                {
                altText: '',
                caption: '',
                key: 3,
                src: 'https://picsum.photos/id/678/1200/600'
                }
            ]}
        />
        </Container>
    );

};
    
    
export default HomepageCarousel; 