import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BookNowButton from './book-now-modal';

//update the images here and in about.js then provide a modest description,
//quickly wrap v1, deploy on surge, optimize SEO "barly real estate, barugo checkin, barugo hotel, barugo vacation"
//run through about.js (GPT/Bard prompt for ideas but write on your own to give it its own soul)
function ImageGrid() {
  return (
    <div style={{maxWidth: "98%", marginLeft: "10px"}}>
        <h4>Room #1 (Transient)</h4>
        <Row xs={1} md={10} className="g-4">
        <Col key={1}>
          <Card>
            <Card.Img variant="top" src="/entrance.jpg" />
            <Card.Body>
              <Card.Title>Entrance</Card.Title>
              <Card.Text>
      Stairs located at the left side of the building.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col key={2}>
          <Card>
            <Card.Img variant="top" src="/bedroom.jpg" />
            <Card.Body>
              <Card.Title>Bedroom</Card.Title>
              <Card.Text>
 Two comfy queen beds for the beloved guests.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col key={3}>
          <Card>
            <Card.Img variant="top" src="/utilities.jpg" />
            <Card.Body>
              <Card.Title>Utilities</Card.Title>
              <Card.Text>
                Free water, towel & water heater along with an aircon, fan & television.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col key={4}>
          <Card>
            <Card.Img variant="top" src="/bathroom.jpg" />
            <Card.Body>
              <Card.Title>Bathroom</Card.Title>
              <Card.Text>
                Toilet, Sink & a heater for those who like it hot.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col key={5}>
          <Card>
            <Card.Img variant="top" src="/balcony.jpg" />
            <Card.Body>
              <Card.Title>Balcony</Card.Title>
              <Card.Text>
          Shared balcony with your neighbor next room, doors can be locked for privacy and security.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <br></br>
        <BookNowButton layoutName={"booknow"}/>
        <br></br>
    </div>
  );
}

export default ImageGrid;