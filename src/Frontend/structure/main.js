import { useState } from "react";
import NavigationBar from "./navigationBar";
import Framework from "../Framework/Framework";
import { ThemeProvider } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AnyPage from "../Swapi/Pages/Blank/AnyPage";
import People from "../Swapi/Pages/People/People";
import Films from "../Swapi/Pages/Films/Films";
import Species from "../Swapi/Pages/Species/Species";
import AnyPage from "../Swapi/Pages/Blank/AnyPage";
import Loading from "../Framework/Loading";
import { storeAction } from "../Store";
import { navbarAction } from "../Store/navbarManager";
import ModalBase from "../Framework/Modal";
const Main = () => {
  const stateId = Framework.generate_uuidv4();
  //const value=useSelector((state)=>{
  
  const value = useSelector((state) => {
    return state;
  });
  let haveLoading = false;
  //value.loading.loading.loadin

  if (value?.loading?.loadin) {
    for (const key in value?.loading?.loadin) {
      haveLoading = haveLoading || value?.loading?.loadin[key];
    }
  }
  const dispatch = useDispatch();
  //dispatch({type:'b'});
  // const selectedTavValue=
  const [selectedTab, setSelectedTab] = useState({
    id: stateId,
    value: "people",
  });

  const onNavbarSelect = (reciever) => {
    // dispatch({type:reciever});
    //setSelectedTab(reciever);
  };
  const onNavbarSearch = (reciever, asdf) => {
    
    //dispatch({ type: "NavbarSearch", searchValue: asdf });
    try {
      dispatch(navbarAction(asdf));
    } catch (error) {
      dispatch(navbarAction(asdf));
    }
  };
  return (
    <div className="container-fluid">
      {haveLoading && <Loading></Loading>}
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <NavigationBar
          className="container"
          onClick={onNavbarSelect}
          onSearch={onNavbarSearch}
        ></NavigationBar>
        <Router>
          <div>
            <hr />

            <Routes>
              <Route exact path="/" component={AnyPage} element={<AnyPage />} />
              <Route path="/people" component={People} element={<People />} />
              <Route path="/films" component={Films} element={<Films />} />
              <Route
                path="/species"
                component={Species}
                element={<Species />}
              />
            </Routes>
          </div>
        </Router>
        {/* <ContextManager.Provider value={selectedTab}>
          <div className="rounded border p-4 container">
            <Context></Context>
          </div>
        </ContextManager.Provider> */}
      </ThemeProvider>
      {value?.modal?.config && (
        <ModalBase config={value?.modal?.config}></ModalBase>
      )}
    </div>
  );
};
export default Main;
