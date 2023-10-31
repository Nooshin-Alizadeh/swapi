// import { Modal } from "bootstrap";
import Modal from "react-bootstrap/Modal";
import { Fragment } from "react";
import { Button } from "react-bootstrap";
import { createPortal } from "react-dom";

const ModalBase = (props) => {
  
  let modalConfig = {
    hasHeader: true,
    hasBody: true,
    hasFooter: true,
  };
  const modalBase = (
    <Fragment>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {modalConfig.hasHeader && (
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {props.config.title}
            </Modal.Title>
          </Modal.Header>
        )}
        {modalConfig.hasBody && <Modal.Body>{props.config.body}</Modal.Body>}
        {modalConfig.hasBody && (
          <Modal.Footer>
            {props.config.footer}
            {/* <Button onClick={props.onHide}>Close</Button> */}
          </Modal.Footer>
        )}
      </Modal>
    </Fragment>
  );
  const portal = createPortal(modalBase, document.body);
  return portal;
};
export default ModalBase;
