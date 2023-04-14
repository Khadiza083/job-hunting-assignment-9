import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './component/Layout/Main'
import Home from './component/Home/Home'
import Statistics from './component/Satistics/Statistics'
import Blog from './component/Blog/Blog'
import AppliedJobs from './component/Applied/AppliedJobs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('data.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/blogs',
        element: <Blog></Blog>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
