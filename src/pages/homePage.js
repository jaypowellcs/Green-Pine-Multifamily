//import {Container} from 'reactstrap';
import HomepageCarousel from '../features/Homepage/HomepageCarousel';
import HomePageSection1 from '../features/Homepage/HomePageSection1';
import HomePageSection2 from '../features/Homepage/HomePageSection2';


const HomePage = () => {
    return (
        <>
            <HomepageCarousel></HomepageCarousel>
            <HomePageSection1></HomePageSection1>
            <HomePageSection2></HomePageSection2>
        </>
    );
};

export default HomePage