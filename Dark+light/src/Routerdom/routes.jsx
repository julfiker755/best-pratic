import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Layout from './Layout';
import Home from '../components/Home';
import About from '../components/About';
import Work from '../components/Work';

const routes =createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },{
                path:'/about',
                element:<About></About>
            },{
                path:'/work',
                element:<Work></Work>
            }
        ]
    }
])

export default routes;