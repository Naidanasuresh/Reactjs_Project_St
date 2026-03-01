// import { useState } from "react"
// import Primary_Button from "../Components/PrimaryButton"
// import { useNavigate } from "react-router-dom"
// import { Account } from "appwrite"
// import appwriteClient from "../Appwrite"
// import AppwriteAccount from "../Appwrite/AppWriteAccount"

// const LoginPage=()=>{

//     const [email, setEmail]=useState('')
//     const [password,setPassword]=useState('')
//     const navigator=useNavigate('')

//     const appwriteAccount=new AppwriteAccount()
//     const loginUser=async(event)=>{
//         try {
//             event.preventDefault();
//             const LoginData={
//                 email,
//                 password

//             }

//             const loginResponse=await appwriteAccount.loginWithEmailAndPassword(LoginData)
//             console.log(loginResponse)
//             navigator('/')

//         } catch (error) {

//         }
//         finally{
//             console.log('finally')
//         }
//     }

//     return (
//         <>
//         <div className="w-screen h-screen bg-red-300 flex justify-center items-center ">
//             <form onSubmit={loginUser} className="bg-white flex flex-col gap-3 rounded-2xl p-3 border p-4 border-gray-700">

//                 <input value={email}  required onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="Enter your Email..." />
//                 <input value={password}  required onChange={(event)=>setPassword(event.target.value)} type="password" placeholder="Enter your Password..." />
//                 <Primary_Button type="submit"> Login </Primary_Button>

//             </form>
//         </div>

//         </>
//     )

// }

// export default LoginPage

import { useState } from "react";
import PrimaryButton from "../Components/PrimaryButton";
import appwriteClient from "../Appwrite_Services";
import { Account, ID } from "appwrite";
import { useNavigate } from "react-router-dom";
import AppwriteAccount from "../Appwrite_Services/AppWriteAccount";
import { Bounce, toast } from "react-toastify";
import { Link } from "react-router-dom";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigater = useNavigate("");
  const appwrite = new Account(appwriteClient);

  const appwriteAccount = new AppwriteAccount();

  const handleLoginUser = async (event) => {
    try {
      event.preventDefault();
      const loginUserData = {
        email,
        password,
      };

      const userLoginResponse =
        await appwriteAccount.LoginUserSession(loginUserData);
      // console.log(userLoginResponse);
      navigater("/");
      toast.success("🦄 Login Successfully!", {
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
      
    } catch (error) {
      console.error(error);
    } finally {
      console.log("finally");
    }
  };

  return (
    <div>
      <form onSubmit={handleLoginUser}>
        <input
          type="email"
          value={email}
          placeholder="Enter Your Email..."
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Enter Your Password..."
          onChange={(event) => setPassword(event.target.value)}
        />

        <PrimaryButton type="submit">Login</PrimaryButton>
        <p>Not an account? <Link to="/register" className='text-blue-500 underline' >Register</Link></p>
      </form>
    </div>
  );
}

export default LoginPage;
