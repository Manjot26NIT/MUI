import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import {store} from './app/store'
import {Provider} from 'react-redux'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Notes/>,
  },
  {
    path:'/create',
    element:<Create/>,
  }
  
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store} >
    <RouterProvider router={router}>
    </RouterProvider>
    </Provider>
  
)
