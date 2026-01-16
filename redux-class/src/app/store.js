import { confgureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';


export const store = confgureStore({
    reducer: todoReducer,
});