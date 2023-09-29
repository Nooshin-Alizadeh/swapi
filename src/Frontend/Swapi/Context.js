import Form from "react-bootstrap/Form";
import Grid from "../Framework/Grid";
import DataService from "../Framework/DataService";
import { useContext, useState } from "react";
import ContextManager from "../contextManager/loading-context-manager";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import People from "./Pages/People/People";
import Films from "./Pages/Films/Films";
import Species from "./Pages/Species/Species";
import Blank from "./Pages/Blank/Blank";
import AnyPage from "./Pages/Blank/AnyPage";
const Context = () => {
  // const [gridData, setGridData] = useState(null);
  // const ctxData = useContext(ContextManager);
  

  //   if (ctxData?.value && ) {
  //     let dataService = new DataService();
  //     dataService
  //       .Get(ctxData.value)
  //       .then((result) => {
  //         setGridData(result.results);
  //       })
  //       .catch((er) => {
  //       });
  //   }

  //dataService.GetMethod();

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Blank />}>
              <Route index element={<Home />} />
              <Route path="/People" element={<People />} />
              <Route path="/Films" element={<Films />} />
              <Route path="/Species" element={<Species />} />
              <Route path="*" element={<AnyPage />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter> */}
        {/* <Grid config={gridconfig} key={ctxData.id}></Grid> */}
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group> */}
    </Form>
  );
};
export default Context;
