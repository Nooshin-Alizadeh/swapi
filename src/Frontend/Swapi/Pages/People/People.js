//import { useContext } from "react";
import Grid from "../../../Framework/Grid";
//import ContextManager from "../../../contextManager/loading-context-manager";

const People=()=>{

    //const ctxData = useContext(ContextManager);
    const gridconfig = {
        columns: [
          { title: "#",type: "firstradio" }, { title: "#",type: "firstaction" },
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
          }
        ],
        data: null,
        url: "people",
      };
      return <Grid config={gridconfig} key={"people"}></Grid> ;
}
export default People;