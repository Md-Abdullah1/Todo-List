import { createSlice } from "@reduxjs/toolkit";

const TodoSlicer = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
            localStorage.setItem("todos", JSON.stringify(state));
        },
        deleteTodo: (state, action) => {
           state.splice(action.payload,1)
           localStorage.setItem("todos", JSON.stringify(state ));
        },
    },
})

export default TodoSlicer.reducer;
export const {addTodo, deleteTodo} = TodoSlicer.actions;