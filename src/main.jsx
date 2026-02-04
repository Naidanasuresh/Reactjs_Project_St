
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import Profile from './Pages/profile.jsx'


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
  path: '/',              // Root URL → http://localhost:5173/
  Component: App,         // Layout component that always renders
  children: [
    {
      index: true,        // Default child route for "/"
      Component: HomePage // Renders when path is exactly "/"
    },
    {
      path: 'profile',   // Child URL → /profile
      Component: Profile // Renders when path is "/profile"
    }
  ]
}
    ])

createRoot(document.getElementById('root')).render(
    
     <RouterProvider router={router} />

  
)
