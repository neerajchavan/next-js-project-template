import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'

const CustomModal = ({
  show,
  onSuccess,
  onClose
}) => {
return (
  <Modal
    show={show}
    onHide={onClose}
    backdrop="static"
    keyboard={false}
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title>Custom Modal</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Col sm="12">
            <Form.Control type="text" placeholder="Enter name" />
          </Col>
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer className='justify-content-start'>
      <Button variant="primary" onClick={onSuccess}>Save</Button>
      <Button variant="secondary" onClick={onClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default CustomModal