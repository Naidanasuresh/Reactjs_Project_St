import { useState } from "react"
import Primary_Button from "../Components/PrimaryButton"
import { useNavigate } from "react-router-dom"
import { Account } from "appwrite"
import appwriteClient from "../Appwrite"
import AppwriteAccount from "../Appwrite/AppWriteAccount"

const LoginPage=()=>{

    const [email, setEmail]=useState('')
    const [password,setPassword]=useState('') 
    const navigator=useNavigate('')

    const appwriteAccount=new AppwriteAccount()
    const loginUser=async(event)=>{
        try {
            event.preventDefault();
            const LoginData={
                email,
                password

            }

            const loginResponse=await appwriteAccount.loginWithEmailAndPassword(LoginData)
            console.log(loginResponse)
            navigator('/')
            
        } catch (error) {
            
        }
        finally{
            console.log('finally')
        }
    }

    return (
        <>
        <div className="w-screen h-screen bg-red-300 flex justify-center items-center ">
            <form onSubmit={loginUser} className="bg-white flex flex-col gap-3 rounded-2xl p-3 border p-4 border-gray-700">

                <input value={email}  required onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="Enter your Email..." />
                <input value={password}  required onChange={(event)=>setPassword(event.target.value)} type="password" placeholder="Enter your Password..." />
                <Primary_Button type="submit"> Login </Primary_Button>

            </form>
        </div>


        
        </>
    )

}

export default LoginPage