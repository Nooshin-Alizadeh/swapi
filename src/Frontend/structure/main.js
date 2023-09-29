import { Fragment, useState } from "react";
import ContextManager, {
  ContextManagerProvider,
} from "../contextManager/loading-context-manager";
import NavigationBar from "./navigationBar";
import Context from "../Swapi/Context";
import Framework from "../Framework/Framework";
import { ThemeProvider } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link ,Routes} from 'react-router-dom';
// import AnyPage from "../Swapi/Pages/Blank/AnyPage";
import People from "../Swapi/Pages/People/People";
import Films from "../Swapi/Pages/Films/Films";
import Species from "../Swapi/Pages/Species/Species";
import AnyPage from "../Swapi/Pages/Blank/AnyPage";
import Loading from "../Framework/Loading";
const Main = () => {
  const stateId = Framework.generate_uuidv4();
  const value=useSelector((state)=>{
  const value=useSelector((state)=>{
    return state;
  });
  let haveLoading=false;
  if (value?.loadin){
    for (const key in value?.loadin) {
      haveLoading=(haveLoading || value?.loadin[key] )
    }
  }
   const dispatch=useDispatch();
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
  const onNavbarSearch = (reciever,asdf) => {
    debugger;
     dispatch({type:'NavbarSearch',searchValue:asdf});

  };
  return (
    <Fragment className="container-fluid">
      {haveLoading && <Loading></Loading>}
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <Router>
        <NavigationBar className="container" onClick={onNavbarSelect} onSearch={onNavbarSearch}></NavigationBar>

      <div>

        <hr />

        <Routes>
          <Route exact path="/" component={AnyPage} element={<AnyPage />} />
          <Route path="/people" component={People} element={<People />} />
          <Route path="/films" component={Films}  element={<Films />}/>
          <Route path="/species" component={Species} element={<Species />}/>
        </Routes>
      </div>
    </Router>
        <ContextManager.Provider value={selectedTab}>
          <div className="rounded border p-4 container">

            <Context></Context>
          </div>
        </ContextManager.Provider>
      </ThemeProvider>
    </Fragment>
  );
};
export default Main;
