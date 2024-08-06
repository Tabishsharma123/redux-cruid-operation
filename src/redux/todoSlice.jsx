import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
    count: 0,
  },
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.todo.push(action.payload);
        state.count += 1;
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
          },
        };
      },
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
    },
    incrementCount: (state) => {
      state.count += 1;
    },
    decrementCount: (state) => {
      state.count -= 1;
    },
  },
});

export const { addTodo, removeTodo, incrementCount, decrementCount } =
  todoSlice.actions;
export default todoSlice.reducer;
