import {Card, CardImg, CardTitle, CardText, Button} from 'reactstrap';

const FloorPlanCard = ({floorplan}) => {
    const {name, image, sqft, cost, type} = floorplan;
    return (
        <Card
            body
            color="success"
            inverse
        >
            <CardTitle tag="h5">
                {type}
            </CardTitle>

            <CardText>
                {name}
            </CardText>

            <CardText>
            {sqft} Square Feet
            </CardText>

            <CardText>
            Starting at ${cost}
            </CardText>

            <CardImg
                width='100%'
                src={image}
                alt={name}
            />
            <Button className='p-2 m-3 btn btn-light'>
                Request to rent
            </Button>
        </Card>

    );
};

export default FloorPlanCard; 