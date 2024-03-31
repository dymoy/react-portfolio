import Card from 'react-bootstrap/Card';

export default function Project({name, desc, bg_img, repo, url}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={bg_img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                <Card.Link href={url}>Visit Page</Card.Link>
                <Card.Link href={repo}>Visit GitHub Repo</Card.Link>
            </Card.Body>
        </Card>
    );
}