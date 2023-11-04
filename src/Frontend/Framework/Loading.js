import { Fragment } from "react";
import BackDrop from "./BackDrop";
import { createPortal } from "react-dom";
import { Button, Spinner } from "react-bootstrap";

const Loading = (props) => {
  return (
    <Fragment>
      <BackDrop onClick={props.onClick}></BackDrop>
      {createPortal(
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </div>,
        document.body
      )}
    </Fragment>
  );
};
export default Loading;
