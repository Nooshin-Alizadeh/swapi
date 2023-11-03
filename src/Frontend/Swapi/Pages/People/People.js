/* eslint-disable eqeqeq */
//import { useContext } from "react";
import Grid from "../../../Framework/Grid";
import { useDispatch } from "react-redux";
import { modalAction } from "../../../Store/modalManager";
import PeopleDetail from "./PeopleDetail";
import { Dropdown } from "react-bootstrap";
import DataService from "../../../Framework/DataService";
import DetailGenerate from "../DetailGenerate";
//import ContextManager from "../../../contextManager/loading-context-manager";

const People = () => {
  const dispatch = useDispatch();
  const dataService = new DataService(dispatch, "peoplePage");
  //const ctxData = useContext(ContextManager);
  const gridconfig = {
    columns: [
      {
        title: "#",
        type: "firstradio",
        onClick: (data, column) => {
          dispatch(
            modalAction.modalConfig({
              config: {
                title: data.name,
                body: PeopleDetail,
                bodyDetail: data,
              },
            })
          );
          //ModalBase({ config: { title: data.name, body: detailBody } });

          // return (
          //   <ModalBase
          //     config={{ title: data.name, body: PeopleDetail }}
          //   ></ModalBase>
          // );
        },
      },
      {
        title: "#",
        type: "",
        template: (row) => {
          return (
            <>
              <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  size="sm"
                  id="dropdown-basic"
                >
                  ...
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={(x, y, z) => {
                      //homeworld
                      dataService
                        .GetMethodIndependent(row.homeworld)
                        .then((detailObject) => {
                          // debugger;
                          dispatch(
                            modalAction.modalConfig({
                              config: {
                                title: detailObject.name,
                                body: DetailGenerate,
                                bodyDetail: { ...row, detailObject },
                              },
                            })
                          );
                        });
                    }}
                  >
                    Homeworld
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(x, y, z) => {
                      //homeworld
                      dataService
                        .GetMethodIndependent(row.url)
                        .then((detailObject) => {
                          // debugger;
                          dispatch(
                            modalAction.modalConfig({
                              config: {
                                title: detailObject.name,
                                body: DetailGenerate,
                                bodyDetail: { ...row, detailObject },
                              },
                            })
                          );
                        });
                    }}
                  >
                    Full Detail
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          );
        },
      },
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
        template: (row) => {
          if (row.gender == "female") {
            return <i className="bi bi-gender-female"></i>;
          } else if (row.gender == "male") {
            return <i className="bi bi-gender-male"></i>;
          } else {
            //bi bi-gender-ambiguous
            return <i className="bi bi-gender-ambiguous"></i>;
          }
        },
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
