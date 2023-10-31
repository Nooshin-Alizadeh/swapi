//import { useContext } from "react";
import { Form } from "react-bootstrap";
import Grid from "../../../Framework/Grid";
import ModalBase from "../../../Framework/Modal";
import { useDispatch } from "react-redux";
import { modalAction } from "../../../Store/modalManager";
//import ContextManager from "../../../contextManager/loading-context-manager";

const People = () => {
  const dispatch = useDispatch();
  //const ctxData = useContext(ContextManager);
  const gridconfig = {
    columns: [
      {
        title: "#",
        type: "firstradio",
        onClick: (data, column) => {
          const detailBody = (
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="name@example.com"
                        size="sm"
                      />
                    </div>
                    <div className="col-md-6 ml-auto">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="name@example.com"
                        size="sm"
                      />
                    </div>
                  </div>
                </div>
              </Form.Group>
            </Form>
          );
          dispatch(
            modalAction({ config: { title: data.name, body: detailBody } })
          );
          ModalBase({ config: { title: data.name, body: detailBody } });

          return (
            <ModalBase
              config={{ title: data.name, body: detailBody }}
            ></ModalBase>
          );
        },
      },
      { title: "#", type: "firstaction" },
      {
        field: "name",
        title: "name",
      },
      {
        field: "height",
        title: "height",
      },
      {
        field: "mass",
        title: "mass",
      },
      {
        field: "hair_color",
        title: "Hair Color",
      },
      {
        field: "skin_color",
        title: "Skin Color",
      },
      {
        field: "gender",
        title: "Gender",
      },
      {
        field: "birth_year",
        title: "bBirth Year",
      },
    ],
    data: null,
    url: "people",
  };
  return <Grid config={gridconfig} key={"people"}></Grid>;
};
export default People;
