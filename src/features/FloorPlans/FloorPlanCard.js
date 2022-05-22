import {Card, CardImg, CardTitle, CardText, Button} from 'reactstrap';

const FloorPlanCard = ({floorplan}) => {
    const {name, image} = floorplan;
    return (
        <Card
            body
            color="info"
            inverse
        >
            <CardTitle tag="h5">
            
            </CardTitle>
            <CardText>
            With supporting text below as a natural lead-in to additional content.
            </CardText>
            <CardImg
                width='100%'
                src={image}
                alt={name}
            />
            <Button>
            Button
            </Button>
        </Card>

    );
};

export default FloorPlanCard; 