import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './layout/App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard, { TaskLoader } from './pages/Dashboard';
import Newtask from './pages/Newtask';
import Edit from './pages/Edit';
import Historic from './pages/Historic';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        loader:TaskLoader,
        element: <Dashboard/>
      },
      {
        path:"newtask",
        element:<Newtask/>
      }, 
      {
        path:"historic",
        loader:TaskLoader,
        element:<Historic/>
      }, 
       {
        path:"/task/:id",
        element:<Edit/>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router ={router}/>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
