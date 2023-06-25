import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {PhoneTwoTone} from '@ant-design/icons';

function BookNowButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow} style={{fontFamily:"DMSans", position:"absolute", left:"3%", top:"50%"}}>
        Book Now
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>To finalize your booking, please call : <br></br> 09472919828 - Smart <PhoneTwoTone/></Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="success" onClick={handleClose}>
            I Understand
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookNowButton;