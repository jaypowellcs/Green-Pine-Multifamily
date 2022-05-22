import {Container} from 'reactstrap';
import HomepageCarousel from '../features/Homepage/HomepageCarousel';
import HomePageSection1 from '../features/Homepage/HomePageSection1';


const HomePage = () => {
    return (
        <Container>
            <HomepageCarousel></HomepageCarousel>
            <HomePageSection1></HomePageSection1>
        </Container>
    );
};

export default HomePage