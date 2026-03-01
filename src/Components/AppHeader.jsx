import { Link } from "react-router-dom"
import useUserStore from "../Stores/useUserStore"
const AppHeader = () => {

    const currentUser=useUserStore((state)=>state.User)
  return (
  
      <header>
      <nav className="p-3 rounded-md bg-blue-200 gap-8 flex " >
      <Link to='/' className="text-blue-600 hover:italic hover:text-amber-900 text-xl">Home</Link>

      <Link to="TodosAppPage"  className='text-blue-600 hover:text-amber-900 hover:italic text-xl '> Todo App</Link>
      <Link to='profile' className="text-blue-600 hover:text-amber-900 hover:italic text-xl">MyProfile</Link>
      
    <br />

      {(currentUser?.$id && currentUser?.labels?.includes("admin"))&& <Link to="/admin-Dashboard"  className="text-blue-600 hover:italic hover:text-amber-900 text-xl">Admin Dashboard</Link>}
    </nav>

    </header>
    
  )
}

export default AppHeader
