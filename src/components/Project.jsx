import Card from 'react-bootstrap/Card';

export default function Project({name, desc, bg_img, repo, url}) {
    return (
        <div className='project-card col-md-7 col-xs-12 my-4'>
            <Card>
                <Card.Img variant="top" src={bg_img} />
                <Card.ImgOverlay>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                    <Card.Link href={url} target='_blank'>Visit Page</Card.Link>
                    <Card.Link href={repo} target='_blank'>Visit GitHub Repo</Card.Link>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}