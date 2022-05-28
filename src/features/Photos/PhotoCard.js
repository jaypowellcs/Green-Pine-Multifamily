import {Card, CardImg, CardTitle} from 'reactstrap';

const PhotoCard = ({photo}) => {
    const {image, name} = photo; 
    return (
        <Card
        outline
        >
            <CardImg
                width='100%'
                src={image}
                alt={name}
            />
            <CardTitle>{name}</CardTitle>
        </Card>
    );
}

export default PhotoCard; 