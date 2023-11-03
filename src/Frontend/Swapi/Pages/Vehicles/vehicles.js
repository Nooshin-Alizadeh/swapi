// import { useContext } from "react";
import Grid from "../../../Framework/Grid";
// import ContextManager from "../../../contextManager/loading-context-manager";

const Vehicles = (props) => {
  // const ctxData = useContext(ContextManager);
  const gridconfig = {
    columns: [
      //{ title: "#",type: "firstradio" }, { title: "#",type: "firstaction" },
      {
        field: "name",
        title: "Name",
      },
      {
        field: "model",
        title: "Model",
      },
      {
        field: "manufacturer",
        title: "Manufacturer",
      },
      {
        field: "vehicle_class",
        title: "Vehicle Class",
      },
      {
        field: "cargo_capacity",
        title: "Cargo Capacity",
      },
    ],
    data: props.gridDataValue,
    url: props.gridDataValue ? null : "vehicles",
  };
  return <Grid config={gridconfig} key={"vehicles"}></Grid>;
};
export default Vehicles;
