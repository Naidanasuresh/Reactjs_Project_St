
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import {App} from './App.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import HomePage from './Pages/HomePage.jsx'
// import Profile from './Pages/profile.jsx'
// import RegisterationPage from './Pages/RegisterationPage.jsx'
// import LoginPage from './Pages/LoginPage.jsx'


// // Visual mental model
// // Browser URL
// //      ↓
// // RouterProvider
// //      ↓
// // createBrowserRouter config
// //      ↓
// // Matched Route Component
// //      ↓
// // <Outlet />

// const router=createBrowserRouter([

//    {
//         path: "/",
//         element: <App />
//     },
//     {
//         path: "/profile",
//         element: <Profile />
//     },
//     {
//       path:'/register',
//       element:<RegisterationPage/>

//     },
//     {
//       path:'/login',
//       element:<LoginPage/>
//     }

//     ])

// createRoot(document.getElementById('root')).render(
    
//      <RouterProvider router={router} />

  
// )

import { ToastContainer, toast } from 'react-toastify';
import { createBrowserRouter,  RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App'
import RegisterationPage from './Pages/RegisterationPage'
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage';
import Profile from './Pages/profile';
import TodosAppPage from './Pages/TodosAppPage';
import AdminDashBoardLayout from './Pages/admin/AdminDashboardlayout';
import OverViewPage from './Pages/admin/OverViewPage';
import {QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './Stores/Utils/Query-Client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// import CounterpageuseReducer1 from './Pages/CounterpageuseReducer1';





const router=createBrowserRouter([

  {
    path:'/',
    element:<App/>,

    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:'profile',
        element:<Profile/>
      },
      {
        path:'TodosAppPage',
        element:<TodosAppPage/>
      },
      // {
      //   path:'counter',
      //   element:<CounterpageuseReducer1/>
      // }
    ]
  },

  {
    path:"/admin-Dashboard",
    element:<AdminDashBoardLayout/>,

    children:[{
      index:true,
      element:<OverViewPage/>
    }]
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
  <>
  
    <QueryClientProvider client={queryClient}>

      <RouterProvider router={router}/>
     <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer />

    </QueryClientProvider>
    

  
  
  </>
  
)
