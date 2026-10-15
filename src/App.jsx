import { useState } from "react"
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";


function App() {
  const [show, setShow] = useState(false);

  const handleClose = ()=> setShow(false);
  const handleShow = ()=> setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        باز کردن مودال
      </Button>

      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>عنوان مودال</ModalTitle>
        </ModalHeader>
        <ModalBody>سلام! این یک موداله با React-Bootstrap 🤩</ModalBody>
        <ModalFooter>
          <Button variant="danger" onClick={handleClose}>
            بستن
          </Button>
        </ModalFooter>
      </Modal>
    </>
  ) 
}

export default App