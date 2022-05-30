import {UncontrolledCarousel, Container} from 'reactstrap';
import pool from '../../app/assets/img/homepool.jpg' 
import kitchen from '../../app/assets/img/homekitchen.jpg' 
import lobby from '../../app/assets/img/apartmentlobby.jpg' 

const HomepageCarousel = () => {
    return (
        <Container className='home-page-carousel pt-0 ' fluid>
        <UncontrolledCarousel 
            items={[
                {
                altText: 'Apartment Complex in Grapevine, Texas',
                caption: 'Apartment Complex in Grapevine, Texas',
                key: 1,
                src: pool, 
                },
                {
                altText: '',
                caption: '',
                key: 2,
                src: kitchen, 
                },
                {
                altText: '',
                caption: '',
                key: 3,
                src: lobby, 
                }
            ]}
        />
        </Container>
    );

};
    
    
export default HomepageCarousel; 