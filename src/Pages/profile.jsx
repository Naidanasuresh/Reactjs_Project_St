
// import useUserStore from '../Stores/useUserStore'

// import { useNavigate } from "react-router-dom";
// import AppwriteAccount from "../Appwrite_Services/AppWriteAccount";
// import useUserStore from "../Stores/useUserStore";
// import { Bounce, toast } from "react-toastify";

// const Profile = () => {

//   const currentUser=useUserStore((state)=>state.user)
//   return (
//     <div>
//       {
//         currentUser.name
//       }
//     </div>
//   )
// }

// export default Profile







// function Profile(){
//   const current_User=useUserStore((state)=>state.User)
  
//   const appwriteAccount=new AppwriteAccount();
//   const navigate=useNavigate()

//   async function handleLogout(){
//     try {

//     const result=await appwriteAccount.logoutUser()
//     console.log(result)
//     if(!result?.message){
//       navigate('/login')
//       toast.success('🦄 Logout Successfully', {
//         position: "top-right",
//         autoClose: 2999,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         transition: Bounce,
//         });

//     }
    
   

      
//     } catch (error) {
//       console.error(error)
//     }
//     finally{
//       console.log('finally')
//     }

//   }

//   return(


//     <div>
    
//         <h1>{current_User.name}</h1>
//         <button type="click" onClick={handleLogout} className="bg-red-600">Logout</button>
//     </div>
//   )
// }
// export default Profile;





//for tanstack  1/3/2026

import { useNavigate } from "react-router-dom";
import AppwriteAccount from "../Appwrite_Services/AppWriteAccount";
import useUserStore from "../Stores/useUserStore";
import { Bounce, toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

import { fetchAllTodos } from "../Components/TodosListing";


function Profile(){
  const current_User=useUserStore((state)=>state.User)
  
  const appwriteAccount=new AppwriteAccount();
  const navigate=useNavigate()

  const {data,isPending,isFetching,isLoading,error,isTodosPending}=useQuery({
    queryKey:['todos'],
    queryFn: fetchAllTodos,
    refetchOnMount:true,
    refetchOnWindowFocus: true


  })

  async function handleLogout(){
    try {

    const result=await appwriteAccount.logoutUser()
    console.log(result)
    if(!result?.message){
      navigate('/login')
      toast.success('🦄 Logout Successfully', {
        position: "top-right",
        autoClose: 2999,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

    }
    
   

      
    } catch (error) {
      console.error(error)
    }
    finally{
      console.log('finally')
    }

  }

  return(


    <div>
    
        <h1>{current_User.name}</h1>
        <button type="click" onClick={handleLogout} className="bg-red-600">Logout</button>
    </div>
  )
}
export default Profile;