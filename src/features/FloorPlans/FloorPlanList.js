import {Col, Row} from 'reactstrap';
import FloorPlanCard from '../FloorPlans/FloorPlanCard';
import {selectAllFloorPlans} from '../FloorPlans/floorplansSlice';

const FloorPlanList = () => {
    const floorplans = selectAllFloorPlans();
    return(
        <Row className='ms-auto'>
            {floorplans.map((floorplan) => {
                return (
                    <Col md='5' className='m-4' key={floorplan.id}>
                        <FloorPlanCard floorplan={floorplan} />
                    </Col>
                );
            })}

        </Row>

    );
};

export default FloorPlanList; 
