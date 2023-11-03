/* eslint-disable eqeqeq */
import { Badge, Button, Form } from "react-bootstrap";
import Framework from "../../../Framework/Framework";
import { useDispatch } from "react-redux";
import { modalAction } from "../../../Store/modalManager";
import DataService from "../../../Framework/DataService";
import { loadingAction } from "../../../Store/loadingManager";
import Films from "../Films/Films";
import Species from "../Species/Species";
import Starships from "../Starships/Starships";
import Vehicles from "../Vehicles/vehicles";

const PeopleDetail = (props) => {
  const dispatch = useDispatch();
  const created = new Date(props.created);
  const edited = new Date(props.edited);
  const loadingId = Framework.generate_uuidv4();

  let dataService = new DataService(dispatch, loadingId);
  const detailBody = (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                size="sm"
                defaultValue={props.name}
                disabled
              />
            </div>
            <div className="col-md-6 ml-auto">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                size="sm"
                defaultValue={props.gender}
                disabled
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Label>Created</Form.Label>
              <Form.Control
                type="date"
                size="sm"
                defaultValue={Framework.getStringOfDate(created)}
                disabled
              />
            </div>
            <div className="col-md-6 ml-auto">
              <Form.Label>Edited</Form.Label>
              <Form.Control
                type="date"
                size="sm"
                value={Framework.getStringOfDate(edited)}
                disabled
              />
            </div>
          </div>

          <div className="row d-flex flex-row bd-highlight mb-3">
            <div className="col-md-2">
              <Button
                variant="outline-primary"
                size="sm"
                disabled={props.films.length == 0}
                onClick={() => {
                  OnClickList(
                    props,
                    dataService,
                    dispatch,
                    loadingId,
                    "Films",
                    Films
                  );
                }}
              >
                Films <Badge bg="secondary">{props.films.length}</Badge>
              </Button>
            </div>
            <div className="col-md-2 ml-auto">
              <Button
                variant="outline-primary"
                size="sm"
                disabled={props.species.length == 0}
                onClick={() => {
                  OnClickList(
                    props,
                    dataService,
                    dispatch,
                    loadingId,
                    "Species",
                    Species
                  );
                }}
              >
                Species <Badge bg="secondary">{props.species.length}</Badge>
              </Button>
            </div>
            <div className="col-md-2 ml-auto">
              <Button
                variant="outline-primary"
                size="sm"
                disabled={props.starships.length == 0}
                onClick={() => {
                  OnClickList(
                    props,
                    dataService,
                    dispatch,
                    loadingId,
                    "Starships",
                    Starships
                  );
                }}
              >
                Starships <Badge bg="secondary">{props.starships.length}</Badge>
              </Button>
            </div>

            <div className="col-md-2 ml-auto">
              <Button
                variant="outline-primary"
                size="sm"
                disabled={props.vehicles.length == 0}
                onClick={() => {
                  OnClickList(
                    props,
                    dataService,
                    dispatch,
                    loadingId,
                    "Vehicles",
                    Vehicles
                  );
                }}
              >
                Vehicles
                <span className="badge bg-secondary">
                  {" "}
                  {props.vehicles.length}{" "}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Form.Group>
    </Form>
  );
  return detailBody;
};
export default PeopleDetail;
function OnClickList(props, dataService, dispatch, loadingId, name, component) {
  props.onHide();
  dataService
    .GetMulti(props[component.name.toLowerCase()])
    .then((result) => {
      dispatch(
        loadingAction.isLoading({
          valueState: false,
          id: loadingId,
        })
      );

      let gridDataValue = [];
      for (const rs of result) {
        gridDataValue.push(rs.data);
      }
      dispatch(
        modalAction.modalConfig({
          config: {
            title: props.name + " " + name,
            body: component,
            bodyDetail: { ...props, gridDataValue },
          },
        })
      );
      //gridDataValue
      //return <Grid config={gridconfig} key={"people"}></Grid>;
    })
    .catch((er) => {
      console.info(er);
    });
}
