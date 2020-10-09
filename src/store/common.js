import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: "common",
  initialState: {
    username: "Cody Simmmons",
    designation: "Lecturer",
    tab: "chart",
    notification: [
      "Assign homework",
      "Talk to calvin Steward Parents",
      " Announce mid term exam date ",
      "Take quiz on 29 OCT 2020",
    ],
  },
  reducers: {
    changeTab: (store, action) => {
      store.tab = action.payload;
    },
  },
});

export default commonSlice.reducer;
export const { changeTab } = commonSlice.actions;
