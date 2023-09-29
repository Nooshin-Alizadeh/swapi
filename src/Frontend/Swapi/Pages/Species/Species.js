// import { useContext } from "react";
import Grid from "../../../Framework/Grid";
// import ContextManager from "../../../contextManager/loading-context-manager";

const Species=()=>{

    // const ctxData = useContext(ContextManager);
    const gridconfig = {
        columns: [
          //{ title: "#",type: "firstradio" }, { title: "#",type: "firstaction" },
          {
            field: "name",
            title: "Name",
          },
          {
            field: "average_lifespan",
            title: "Average Lifespan",
          },
          {
            field: "classification",
            title: "Classification",
          },
          {
            field: "language",
            title: "Language",
          }
        ],
        data: null,
        url: "species",
      };
      return <Grid config={gridconfig} key={"Species"}></Grid> ;
}
export default Species;