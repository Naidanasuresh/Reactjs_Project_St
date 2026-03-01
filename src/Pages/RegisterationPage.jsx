// import { useState } from "react"
// import Primary_Button from "../Components/PrimaryButton"
// // import { Account,ID} from "appwrite"
// // import appwriteClient from "../Appwrite"
// import { useNavigate } from "react-router-dom"
// import AppwriteAccount from "../Appwrite/AppWriteAccount"

// const RegisterationPage=()=>{

//     const [name,setName]=useState('')
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
//     const [confirmPassword,setConfirmPassword]=useState('')
//     const navigate=useNavigate()

//     const appwriteAccount=new AppwriteAccount()
//     const registernewuser=async (event)=>{

//         try {
//             event.preventDefault()
//             const newUserData={
//                 name,
//                 email,
//                 password
//             }
//             // console.log(newUserData)
//             const newUserResponse=await appwriteAccount.createNewUser(newUserData)

//             console.log(newUserResponse)// this response comming from appwrite
//             if (newUserResponse?.$id){
//                 navigate('/login')
//             }

//         } catch (error) {
//             console.error(error)

//         }
//         finally{
//             console.log("finally")

//         }
//     }

//     return(
//         <>
//         <div className='h-screen w-screen bg-red-300 flex items-center justify-center'>

//             <form onSubmit={registernewuser} className=" border p-4 border-gray-700 rounded bg-white p-3  rounded-2xl flex flex-col gap-3">
//             <input value={name}  onChange={(event)=>setName(event.target.value)} required placeholder="Enter your Name..." type="text" />

//             <input value={email} onChange={(event)=>setEmail(event.target.value)} required placeholder="Enter your Email..." type="text" />

//             <input value={password} onChange={(event)=>setPassword(event.target.value)}  required placeholder="Enter your Password..." type="text" />

//             <input value={confirmPassword} onChange={(event)=>setConfirmPassword(event.target.value)}  required placeholder=" Confirm Your Password (Retype)..." type="text" />
//             <Primary_Button type="submit"
//         >Register</Primary_Button>
//         </form>

//         </div>

//         </>
//     )

// }

// export default RegisterationPage

// import react, { useState } from 'react'
// import Primary_Button from '../Components/PrimaryButton'
// import { Account, ID} from 'appwrite'
// import appwriteClient from '../Appwrite'
// const RegisterationPage=()=>{
//     const [name,setName]=useState('')
//     const [email,setEmail]=useState()
//     const[password,setPassword]=useState('')
//     const[confirmPassword,setConfirmpassword]=useState('')

//     const appwrite= new Account(appwriteClient)
//     async function handleregisterform(event){
//         try {

//             event.preventDefault();

//             const newUserData={
//                 name,
//                 email,
//                 password

//             }
//             const newUSerregister=await appwrite.create({
//                 userId:ID.unique(),
//                 ...newUserData
//             })
//         } catch (error) {
//             console.error(error)

//         }
//         finally{
//             console.log("finally")

//         }

//     }

//     return (
//         <div>
//             <form  onSubmit={handleregisterform}>
//                 <input value={name} onChange={(event)=>setName(event.target.value)} type="text" required placeholder='Enter Your Name...'  />

//                 <input value={email} onChange={(event)=>setEmail(event.target.value)} type="email" required placeholder='Enter Your Email...'/>

//                 <input value={password} onChange={(event)=>setPassword(event.target.value)} type="password" required placeholder='Enter Your Password...'/>

//                 <input value={confirmPassword} onChange={(event)=>setConfirmpassword(event.target.value)} type="password" required placeholder='ReEnter Your Password...'/>

//                 <Primary_Button  type="submit">Register</Primary_Button>

//             </form>

//         </div>
//     )

// }

// export default RegisterationPage

import { useState } from "react";
import PrimaryButton from "../Components/PrimaryButton";
// import appwriteClient from "../Appwrite";
// import { Account, ID } from "appwrite";
import { useNavigate } from "react-router-dom";
import AppwriteAccount from "../Appwrite_Services/AppWriteAccount";
import { Bounce, toast } from "react-toastify";
import { Link } from "react-router-dom";

function RegisterationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const appwrite = new Account(appwriteClient);
  const appwriteAccount = new AppwriteAccount();
  const Navgate = useNavigate();

  const handleRegisterUser = async (event) => {
    try {
      event.preventDefault();
      const newUserData = {
        name,
        email,
        password,     
      };

      const newUserRegisterResponse =
        await appwriteAccount.createNewUser(newUserData);
      if (newUserRegisterResponse?.$id) {
        toast.success("🦄 Register Successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        Navgate("/login");
      }
    } catch (error) {
      toast.error( error.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      if (error.code === 409) {
        Navgate("/login");
      } else {
        console.log("error", error);
        console.error(error);
      }
    } finally {
      console.log("finally");
    }
  };

  return (
    <div className="bg-red-300   w-screen h-screen flex  items-center justify-center ">
      <form
        className="bg-white  rounded-2xl p-6 border-2 border-amber-300 flex flex-col gap-3"
        onSubmit={handleRegisterUser}
      >
        <input
          type="text"
          placeholder="Enter Your Name..."
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="emai;"
          placeholder="Enter Your Email..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Your Password..."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="password"
          placeholder="Re-Enter Your Password..."
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />

        <PrimaryButton type="submit">Register</PrimaryButton>

        <p>
          Already have an Account?{" "}
          <Link to="/login" className=" text-blue-600 hover:underline hover:italic hover:text-blue-900">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterationPage;
