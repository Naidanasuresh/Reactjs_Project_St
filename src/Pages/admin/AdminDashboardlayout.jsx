import { Outlet } from "react-router-dom"

const AdminDashBoardLayout=()=>{

    return(
        <div className="w-screen h-screen  flex items-start gap-6 bg-teal-50 p-6">
            <div className="bg-red-200 rounded-2xl w-[20%] h-full p-6 flex flex-col items-start gap-6" >
                <div>
                    <img src="/" alt="" />
                </div>

            </div>

            <div className="w-[80%] h-full">
                <Outlet/>
            </div>
        
        </div>
    )

}

export default AdminDashBoardLayout