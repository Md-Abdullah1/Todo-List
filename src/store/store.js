import { configureStore } from "@reduxjs/toolkit";
import TodoSlicer from "./slices/TodoSlice"
const store = configureStore({
    reducer: {
        todos: TodoSlicer,
    },
})

export default store;