

// // import UseEffect from "./Concepts/HOOKS/UseEffect.jsx"
// // import UseState from "./Concepts/HOOKS/UseStateeg1.jsx"
// // import Map from "./Components/Mapfunction/map.jsx"
// // import Pokemon from './Components/Pokemon.jsx'
// // import Pokemon2foruseQuery from "./Components/thisforuseQuery.jsx"
// import { Link, Outlet } from "react-router-dom"
// import TodosApp from "./Components/TodosApp.jsx"
// import { useEffect } from "react"
// import AppwriteAccount from "./Appwrite/AppWriteAccount.js"
// import useUserStore from "./Stores/useUserStore.js"



// export function App(){

//   const appwriteAccount=new AppwriteAccount()
//   const setUser =useUserStore((state)=>state.setUser)
//   const getCurrentUser=async()=>{
//     try {
//       const currentUser=await appwriteAccount.getCurrentUser();
//       console.log(currentUser)
//       setUser(currentUser)
//     } 
//     catch (error) {
//       console.error(error)
      
//     }

//   }
// useEffect(()=>{
//   getCurrentUser() 
// },[])
// console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  // return(
    <>


    
    {/* <Map/> */}
    {/* <UseEffect/> */}
    {/* <UseState/> */}
    {/* <Pokemon/> */}
    {/* <Pokemon2foruseQuery/> */}
    {/* <section>
      <h1>App Layout</h1>
    </section>
    
    <main>
      <Outlet/>
    </main> */}
    {/* <TodosApp/> */}
    {/* <nav>
      <Link to="/profile" >My Profile</Link>
    </nav>
    <h1>Home Page</h1> */}


   

   
    </>
    

   
//   )
// }






import react, { useEffect } from 'react';
import HomePage from './Pages/HomePage';
import { Account, Client } from 'appwrite';
import useUserStore from './Stores/useUserStore';
import { Outlet, useNavigate } from 'react-router-dom';
import Nav_Bar from './Components/Nav_Bar';
import AppwriteAccount from './Appwrite_Services/AppWriteAccount';
import { Link } from 'react-router-dom';
import AppHeader from './Components/AppHeader';
import TodosAppPage from './Pages/TodosAppPage';

function App(){
   console.log("App")
   const account = new Account(Client);//Appwrite
   const setUser=useUserStore((state)=>state.setUser)
   const navigate=useNavigate()

   const appwriteAccount= new AppwriteAccount()

   const getCurrentLoginUser=async()=>{
    try {
      const currentUser=await appwriteAccount.getCurrentUser()
      setUser(currentUser)
      
    } catch (error) {
      console.error('error')
      navigate('/login')

      
    }
    finally{
      
    }

   }
   
useEffect(()=>{
  getCurrentLoginUser()
},[])
  return(
    <>



   
    {/* <Nav_Bar/> */}
    {/* <TodosAppPage/> */}
    <AppHeader/>
    
    
    <main>
      <Outlet/>
    </main>
    </>
  )
}

export default App;
