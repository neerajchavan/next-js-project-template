import { useState } from "react";
import { ToastContainer, Toast as BootstrapToast } from "react-bootstrap";

function Toast() {
  const [show, setShow] = useState(true);

  return (
    <ToastContainer className="p-3" position={"top-end"}>
      <BootstrapToast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <BootstrapToast.Header closeButton={false}>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="img" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </BootstrapToast.Header>
        <BootstrapToast.Body>Hello, world! This is a BootstrapToast message.</BootstrapToast.Body>
      </BootstrapToast>
    </ToastContainer>
  );
}

export default Toast;
