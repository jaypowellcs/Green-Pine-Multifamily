import {UncontrolledCarousel, Container} from 'reactstrap';
import pool from '../../app/assets/img/homepool.jpg' 
import kitchen from '../../app/assets/img/homekitchen.jpg' 
import lobby from '../../app/assets/img/apartmentlobby.jpg' 

const HomepageCarousel = () => {
    return (
        <Container  className='home-page-carousel'>
            <h3>Green Pines Apartment Homes</h3>
        <UncontrolledCarousel
            items={[
                {
                altText: '',
                caption: '',
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