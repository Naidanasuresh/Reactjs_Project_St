import { useState } from "react"
import Primary_Button from "../Components/PrimaryButton"
// import { Account,ID} from "appwrite"
// import appwriteClient from "../Appwrite"
import { useNavigate } from "react-router-dom"
import AppwriteAccount from "../Appwrite/AppWriteAccount"

const RegisterationPage=()=>{

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const navigate=useNavigate()
    
    const appwriteAccount=new AppwriteAccount()
    const registernewuser=async (event)=>{
        
        try {
            event.preventDefault()
            const newUserData={
                name,
                email,
                password
            }
            // console.log(newUserData)
            const newUserResponse=await appwriteAccount.createNewUser(newUserData)
            
            console.log(newUserResponse)// this response comming from appwrite
            if (newUserResponse?.$id){
                navigate('/login')
            }
           
        } catch (error) {
            console.error(error)
            
        }
        finally{
            console.log("finally")

        }
    }

    return(       
        <>
        <div className='h-screen w-screen bg-red-300 flex items-center justify-center'>

            <form onSubmit={registernewuser} className=" border p-4 border-gray-700 rounded bg-white p-3  rounded-2xl flex flex-col gap-3">
            <input value={name}  onChange={(event)=>setName(event.target.value)} required placeholder="Enter your Name..." type="text" />

            <input value={email} onChange={(event)=>setEmail(event.target.value)} required placeholder="Enter your Email..." type="text" />

            <input value={password} onChange={(event)=>setPassword(event.target.value)}  required placeholder="Enter your Password..." type="text" />

            <input value={confirmPassword} onChange={(event)=>setConfirmPassword(event.target.value)}  required placeholder=" Confirm Your Password (Retype)..." type="text" />
            <Primary_Button type="submit"
        >Register</Primary_Button>
        </form> 
        
        </div>
        
        </>
    )

}

export default RegisterationPage