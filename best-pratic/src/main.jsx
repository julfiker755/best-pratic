import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from './components/Layout/Layout';
import User from './components/User/User';
import Details from './components/Details/Details';
import Error from './components/Error/Error';
import Dashboard from './components/Dashboard/Dashboard';
import Picchart from './components/Picchart/Picchart';
import Circle from './components/Circle/Circle';
import Navber from './components/Navber/Navber';
const router = createBrowserRouter([
 {
    path: "/",
    errorElement:<Error></Error>,
    element:<Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Circle></Circle>
      },{
        path:'/pichart',
        element:<Picchart></Picchart>
      },{
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },{
        path:'/user',
        loader:()=> fetch("https://dummyjson.com/products/"),
        element:<User></User>
      },{
        path:'/user/:id',
        loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`) ,
        element:<Details></Details>
      }
    ]
  },{
    path:'/navber',
    element:<Navber></Navber>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
