//import { useContext } from "react";
import Grid from "../../../Framework/Grid";
// import ContextManager from "../../../contextManager/loading-context-manager";

const Films=(props)=>{
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
        data: props.gridDataValue,
        url: props.gridDataValue?null:"films"
      };
      return <Grid config={gridconfig} key={"films"}></Grid> ;
}
export default Films;