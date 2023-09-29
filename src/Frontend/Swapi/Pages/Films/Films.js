//import { useContext } from "react";
import Grid from "../../../Framework/Grid";
// import ContextManager from "../../../contextManager/loading-context-manager";

const Films=()=>{

    //const ctxData = useContext(ContextManager);
    const gridconfig = {
        columns: [
          // { title: "#",type: "firstradio" }, { title: "#",type: "firstaction" },
          {
            field: "title",
            title: "Title",
          },
          {
            field: "director",
            title: "Director",
          },
          {
            field: "producer",
            title: "Producer",
          },
          {
            field: "release_date",
            title: "Release Date",
          }
        ],
        data: null,
        url: "films"
      };
      return <Grid config={gridconfig} key={"films"}></Grid> ;
}
export default Films;