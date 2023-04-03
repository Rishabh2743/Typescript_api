import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';


function PopUp(props: { show: any; }) {
  const[ show, setShow] = useState(props.show)
  const handleClose = () => setShow(false); 
  return (

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  
  );
}

export default PopUp;