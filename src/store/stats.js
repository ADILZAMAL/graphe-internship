import { createSlice } from "@reduxjs/toolkit";

const statsSlice = createSlice({
  name: "stats",
  initialState: {
    //These data are meant to be featch from database
    numberOfStudent: 62,
    averageMark: 6.8,
    numberOfUnderPerformingStudents: 9,
    percentageOfFinishedHomework: 83,
    lectionsLeft: 25,
    hoursSpentOnLections: 139,
    sortBy: "descending",
    students: [
      { averageMark: 8.7, name: "Kevin	Terry" },
      { averageMark: 6.4, name: "Christian	Ross" },
      { averageMark: 6.2, name: "Edward	Metcalfe" },
      { averageMark: 4.8, name: "Steven	Nolan" },
      { averageMark: 7.8, name: "Rose	Vaughan" },
      { averageMark: 9.0, name: "Warren	King" },
      { averageMark: 9.8, name: "Richard	Clarkson" },
      { averageMark: 9.0, name: "Carolyn	Davidson" },
      { averageMark: 5.3, name: "Emily	Vaughan" },
      { averageMark: 5.8, name: "Wendy	Short" },
      { averageMark: 8.7, name: "Gabrielle	Baker" },
      { averageMark: 5.4, name: "Jack	Brown" },
      { averageMark: 5.7, name: "Alexandra	MacDonald" },
      { averageMark: 4.3, name: "Jack	Alsop" },
      { averageMark: 8.4, name: "Adrian	Fraser" },
      { averageMark: 4.6, name: "David	Ross" },
      { averageMark: 4.4, name: "Stewart	Manning" },
      { averageMark: 6.6, name: "Owen	Hart" },
      { averageMark: 8.5, name: "Zoe	Lee" },
      { averageMark: 5.2, name: "Dan	Piper" },
      { averageMark: 9.2, name: "Sue	Newman" },
      { averageMark: 8.0, name: "Neil	Alsop" },
      { averageMark: 7.3, name: "Angela	Lee" },
      { averageMark: 4.6, name: "Andrew	North" },
      { averageMark: 6.6, name: "Lucas	Russell" },
      { averageMark: 8.8, name: "Sam	Anderson" },
      { averageMark: 10.0, name: "Felicity	Wright" },
      { averageMark: 4.9, name: "Amelia	Bower" },
      { averageMark: 10.0, name: "Warren	Grant" },
      { averageMark: 8.6, name: "Brandon	Coleman" },
      { averageMark: 9.0, name: "Robert	Peters" },
      { averageMark: 6.3, name: "Boris	Blake" },
      { averageMark: 5.0, name: "Tim	Mackay" },
      { averageMark: 6.9, name: "Paul	Nash" },
      { averageMark: 9.9, name: "Neil	Burgess" },
      { averageMark: 4.7, name: "Joanne	Gibson" },
      { averageMark: 4.8, name: "Bella	Stewart" },
      { averageMark: 4.9, name: "Steven	May" },
      { averageMark: 5.3, name: "Alexandra	Jones" },
      { averageMark: 7.7, name: "Grace	Murray" },
      { averageMark: 7.9, name: "Keith	Robertson" },
      { averageMark: 8.2, name: "Carl	Underwood" },
      { averageMark: 8.4, name: "Penelope	Jones" },
      { averageMark: 8.6, name: "Lauren	Oliver" },
      { averageMark: 8.9, name: "Neil	Miller" },
      { averageMark: 6.1, name: "Jake	Scott" },
      { averageMark: 6.2, name: "Molly	MacDonald" },
      { averageMark: 6.3, name: "Luke	Roberts" },
      { averageMark: 6.4, name: "Kimberly	Quinn" },
      { averageMark: 6.7, name: "Nicholas	Greene" },
      { averageMark: 6.9, name: "Trevor	Walker" },
      { averageMark: 4.1, name: "Tracey	James" },
      { averageMark: 4.0, name: "Sean	Lewis" },
      { averageMark: 4.5, name: "Irene	Young" },
      { averageMark: 9.2, name: "Anne	Coleman" },
      { averageMark: 9.7, name: "Isaac	Ross" },
      { averageMark: 9.8, name: "Karen	Oliver" },
      { averageMark: 9.0, name: "Anna	Quinn" },
      { averageMark: 9.1, name: "Samantha	Greene" },
      { averageMark: 7.3, name: "Carl	Ross" },
      { averageMark: 7.2, name: "Diana	Smith" },
    ],
    group: [
      ["Groups of 20 students", 20],
      ["Groups of 10 students", 20],
      ["Groups of 5 students", 15],
      ["Individual sessions", 7],
    ],
  },
  reducers: {
    changeSortBy: (store, action) => {
      console.log(action.payload);
      store.sortBy = action.payload;
    },
  },
});

export default statsSlice.reducer;
export const { changeSortBy } = statsSlice.actions;
