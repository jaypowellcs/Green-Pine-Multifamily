import FloorPlanList from "../features/FloorPlans/FloorPlanList";
import FloorPlansIntro from '../features/FloorPlans/FloorPlansIntro';
import {Container} from 'reactstrap';

const FloorPlansPage2 = () => {
    return (
        <Container>
            <FloorPlansIntro></FloorPlansIntro>
            <FloorPlanList></FloorPlanList>
        </Container>
    );
    
};

export default FloorPlansPage2; 