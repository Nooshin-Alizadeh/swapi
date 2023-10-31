//Redux logic
import { configureStore } from "@reduxjs/toolkit";
import loadingManager from "./loadingManager";
import navbarManager from "./navbarManager";
import modalManager from "./modalManager";

const store = configureStore({
  reducer: {
    navbar: navbarManager.reducer,
    loading: loadingManager.reducer,
    modal: modalManager.reducer,
  },
});

export default store;
