import NavigationBar from "./navigationBar";
import { ThemeProvider } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AnyPage from "../Swapi/Pages/Blank/AnyPage";
import People from "../Swapi/Pages/People/People";
import Films from "../Swapi/Pages/Films/Films";
import Species from "../Swapi/Pages/Species/Species";
import Loading from "../Framework/Loading";
import { navbarAction } from "../Store/navbarManager";
import ModalBase from "../Framework/Modal";
import { modalAction } from "../Store/modalManager";
import Vehicles from "../Swapi/Pages/Vehicles/vehicles";
import Starships from "../Swapi/Pages/Starships/Starships";
import AlertMsg from "../Framework/Alert";
import { alertAction } from "../Store/alertManager";
import { useEffect } from "react";
const Main = () => {
  // const stateId = Framework.generate_uuidv4();
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
  useEffect(() => {
    const timer = setTimeout(() => {
      if (value?.alert?.config) {
        dispatch(
          alertAction.alertConfig({
            config: null,
          })
        );
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value?.alert?.config]);
  // const [selectedTab, setSelectedTab] = useState({
  //   id: stateId,
  //   value: "people",
  // });

  // const onNavbarSelect = (reciever) => {
  //   // dispatch({type:reciever});
  //   //setSelectedTab(reciever);
  // };
  const onNavbarSearch = (reciever, asdf) => {
    //dispatch({ type: "NavbarSearch", searchValue: asdf });
    try {
      dispatch(navbarAction.navbarSearch(asdf));
    } catch (error) {
      dispatch(navbarAction.navbarSearch(asdf));
    }
  };
  const setModalShow = () => {
    dispatch(modalAction.modalConfig({ config: null }));
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
          // onClick={onNavbarSelect}
          onSearch={onNavbarSearch}
        ></NavigationBar>
        <Router>
          <div>
            <hr />
            <Routes>
              <Route exact path="/" component={People} element={<People />} />
              <Route path="/people" component={People} element={<People />} />
              <Route path="/films" component={Films} element={<Films />} />
              <Route
                path="/species"
                component={Species}
                element={<Species />}
              />
              <Route
                path="/vehicles"
                component={Vehicles}
                element={<Vehicles />}
              />
              <Route
                path="/starships"
                component={Starships}
                element={<Starships />}
              />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
      {value?.modal?.config && (
        <ModalBase
          show={true}
          onHide={() => setModalShow(false)}
          config={value?.modal?.config}
        ></ModalBase>
      )}
      {value?.alert?.config && (
        <AlertMsg
          show={true}
          onHide={() => setModalShow(false)}
          config={value?.alert?.config}
        ></AlertMsg>
      )}
    </div>
  );
};
export default Main;
