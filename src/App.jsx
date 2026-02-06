

// import UseEffect from "./Concepts/HOOKS/UseEffect.jsx"
// import UseState from "./Concepts/HOOKS/UseStateeg1.jsx"
// import Map from "./Components/Mapfunction/map.jsx"
// import Pokemon from './Components/Pokemon.jsx'
// import Pokemon2foruseQuery from "./Components/thisforuseQuery.jsx"
import { Link, Outlet } from "react-router-dom"
// import TodosApp from "./Components/TodosApp.jsx"
import { useEffect } from "react"
import AppwriteAccount from "./Appwrite/AppWriteAccount.js"
import useUserStore from "./Stores/useUserStore.js"



export function App(){

  const appwriteAccount=new AppwriteAccount()
  const setUser =useUserStore((state)=>state.setUser)
  const getCurrentUser=async()=>{
    try {
      const currentUser=await appwriteAccount.getCurrentUser();
      console.log(currentUser)
      setUser(currentUser)
    } 
    catch (error) {
      console.error(error)
      
    }

  }
useEffect(()=>{
  getCurrentUser() 
},[])
console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  return(
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
    <nav>
      <Link to="/profile" >My Profile</Link>
    </nav>
    <h1>Home Page</h1>


   

   
    </>
    

   
  )
}


