import { createSlice } from "@reduxjs/toolkit";

export const modalManager = createSlice({
  name: "modal",
  initialState: { config: null },
  reducers: {
    modalConfig(state, action) {
      
      if (action.payload.valueState == false) {
        delete state.loadin[action.payload.id];
      } else {
        state.loadin[action.payload.id] = action.payload.valueState;
      }
    },
  },
});
export const modalAction = modalManager.actions;

export default modalManager;
