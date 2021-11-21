import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    tasks: [
      {
        id: 1,
        text: "Finish the React project 💻",
        isCompleted: false,
      },
      {
        id: 2,
        text: "Go shopping 🛒",
        isCompleted: false,
      },
      {
        id: 3,
        text: "Watch a movie with family 👨‍👩‍👧‍👧",
        isCompleted: false,
      },
    ],
  },
  reducers: {
      addToDo: (state, action) => {
          console.log(action)
      state.tasks.push(action.payload);
    },

    toggle: (state, action) => {
      const toggleItem = state.tasks.find((task) => task.id === action.payload); // obje
      toggleItem.isCompleted = !toggleItem.isCompleted;
    },

    deleteTodo: (state, action) => {
      state.tasks =  state.tasks.filter((task) => task.id !== action.payload);
      
    },
  },
});

export const { addToDo, toggle, deleteTodo} = todosSlice.actions;
export default todosSlice.reducer;
