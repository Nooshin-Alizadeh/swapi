// import { Modal } from "bootstrap";
import Modal from "react-bootstrap/Modal";
import { Fragment } from "react";
import { Button } from "react-bootstrap";

const ModalBase = (props) => {
  let modalConfig = {
    hasHeader: true,
    hasBody: true,
    hasFooter: true,
  };
  const config = { ...props.config };
  const propsData = {
    show: props.show,
    onHide: props.onHide,
  };

  const modalBase = (
    <Fragment>
      <Modal
        {...propsData}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {modalConfig.hasHeader && (
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {config.title}
            </Modal.Title>
          </Modal.Header>
        )}
        {modalConfig.hasBody && (
          <Modal.Body>
            {config.body({ ...config.bodyDetail, onHide: props.onHide })}
          </Modal.Body>
        )}
        {modalConfig.hasFooter && (
          <Modal.Footer>
            {config.footer}
            <Button onClick={props.onHide}>Close</Button>
            {/* <Button onClick={props.onHide}>Close</Button> */}
          </Modal.Footer>
        )}
      </Modal>
    </Fragment>
  );
  //const portal = createPortal(modalBase, document.body);
  return modalBase;
};
export default ModalBase;
