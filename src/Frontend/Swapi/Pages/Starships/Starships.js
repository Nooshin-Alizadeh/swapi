// import { useContext } from "react";
import Grid from "../../../Framework/Grid";
// import ContextManager from "../../../contextManager/loading-context-manager";

const Starships = (props) => {
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
        field: "crew",
        title: "Crew",
      },
    ],
    data: props.gridDataValue,
    url: props.gridDataValue ? null : "starships",
  };
  return <Grid config={gridconfig} key={"Starships"}></Grid>;
};
export default Starships;
