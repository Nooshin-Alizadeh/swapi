//Redux logic
import * as red from "redux";
const reducer = (state = { loadin: {} }, action) => {

  if (action?.type) {
    let prestate = {}; // = { ...state };
      Object.assign(prestate, state);
    if (action.type == "isLoading") {
      if (action.valueState == false) {
        delete prestate.loadin[action.id];
        return prestate;
      }
      var loadingvalie = {};
      loadingvalie[action.id] = action.valueState;
      if (prestate.loadin) {
        prestate.loadin[action.id] = action.valueState;
        return prestate;
      }

      return { loadin: loadingvalie };
    }else if(action.type=="NavbarSearch"){
      prestate.navbarSearch=action.searchValue;
    }
  }else{
    return state;

  }
};

const store = red.createStore(reducer);
export default store;
