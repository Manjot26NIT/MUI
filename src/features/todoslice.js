import { createSlice } from "@reduxjs/toolkit";
const initialState = { 
    todos:[]
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addtitle:(state,action)=>{
            const { title, detail ,type} = action.payload;
            const todo={
                title:title,
                detail:detail,
                type:type,
            }
            state.todos.push(todo)          
                    },
                 
    }       
})
export const { addtitle } = todoSlice.actions;
export default todoSlice.reducer;