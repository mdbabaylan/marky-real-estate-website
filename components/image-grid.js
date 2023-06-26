import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//update the images here and in about.js then provide a modest description,
//quickly wrap v1, deploy on surge, optimize SEO "barly real estate, barugo checkin, barugo hotel, barugo vacation"
//run through about.js (GPT/Bard prompt for ideas but write on your own to give it its own soul)
function ImageGrid() {
  return (
    <div style={{maxWidth: "98%", marginLeft: "10px"}}>
        <Row xs={1} md={2} className="g-4">
        <Col key={1}>
          <Card>
            <Card.Img variant="top" src="/placeholder_room.jpg" />
            <Card.Body>
              <Card.Title>Entrance</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col key={2}>
          <Card>
            <Card.Img variant="top" src="/placeholder_room.jpg" />
            <Card.Body>
              <Card.Title>Bedroom</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col key={3}>
          <Card>
            <Card.Img variant="top" src="/placeholder_room.jpg" />
            <Card.Body>
              <Card.Title>Bathroom</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col key={4}>
          <Card>
            <Card.Img variant="top" src="/placeholder_room.jpg" />
            <Card.Body>
              <Card.Title>Balcony</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    <br></br>
    </div>
  );
}

export default ImageGrid;