import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Resume from './assets/Ernest.pdf'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Resume",
    element: <div>
      <img src={Resume}></img>
    </div>,
  },
  {
    path: '/Contact',
    element: <div>blogs</div>
  },
  {
    path: '/',
    element: <App />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
