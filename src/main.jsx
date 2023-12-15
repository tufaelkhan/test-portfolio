import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './pages/Main';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/portfolio',
        element: <Portfolio></Portfolio>
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-slate-200'>
     <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
