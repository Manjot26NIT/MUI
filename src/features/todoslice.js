import { createSlice } from "@reduxjs/toolkit";
const initialState = { 
  todos : [
        {
            id: 1,
            title: 'Finish report',
            detail: 'Complete the financial report for Q2 and send it to the manager.',
            category: 'work'
        },
        {
            id: 2,
            title: 'Grocery shopping',
            detail: 'Buy vegetables, fruits, and dairy products for the week.',
            category: 'personal'
        },
        {
            id: 3,
            title: 'Team meeting',
            detail: 'Attend the project kickoff meeting with the development team.',
            category: 'work'
        },
        {
            id: 4,
            title: 'Gym',
            detail: 'Workout for at least 1 hour focusing on cardio and strength training.',
            category: 'health'
        }
    ]
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addtitle:(state,action)=>{
            const { title, detail ,type} = action.payload;
            const todo={
                id:Date.now(),
                title:title,
                detail:detail,
                type:type,
            }
            state.todos.push(todo)          
                    },
                    removeTodo: (state, action) => {
                        const  id  = action.payload;
                        state.todos = state.todos.filter((todo) => todo.id !== id);
                    }
                 
    }       
})
export const { addtitle ,removeTodo} = todoSlice.actions;
export default todoSlice.reducer;