import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    tasks: [
      {
        id: 1,
        text: "cimbom",
        isCompleted: false,
      },
      {
        id: 2,
        text: "fener",
        isCompleted: false,
      },
      {
        id: 3,
        text: "mecidiyeköy",
        isCompleted: false,
      },
    ],
  },
    reducers: {
        addToDo: (state, action) => {
            state.tasks.push(action.payload)
      }
  },
});

export const {addToDo} = todosSlice.actions
export default todosSlice.reducer;