
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import Profile from './Pages/profile.jsx'
import RegisterationPage from './Pages/RegisterationPage.jsx'
import LoginPage from './Pages/LoginPage.jsx'


// Visual mental model
// Browser URL
//      ↓
// RouterProvider
//      ↓
// createBrowserRouter config
//      ↓
// Matched Route Component
//      ↓
// <Outlet />

const router=createBrowserRouter([

   {
        path: "/",
        element: <App />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
      path:'/register',
      element:<RegisterationPage/>

    },
    {
      path:'/login',
      element:<LoginPage/>
    }

    ])

createRoot(document.getElementById('root')).render(
    
     <RouterProvider router={router} />

  
)
