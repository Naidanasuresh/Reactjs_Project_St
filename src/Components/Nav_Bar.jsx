import { Link } from "react-router-dom";
import RegisterationPage from "../Pages/RegisterationPage";

function Nav_Bar(){

     console.log("Nav Bar")
    return (
        <>
        <div>
            <ul className="flex justify-between items-center margin-20 bg-gray-200">
                <li>Home</li>
                <li>Tv</li>
                <li>Mobiles</li>
                <li>kids Ware</li>
                <li>Men Ware</li>
                <li>
                    <Link to={'/login'}>
                    Login
                    </Link>
                </li>
                <li>/</li>
                <li>
                    <Link to={'/register'}>Sign_up</Link>
                   </li>
                <li>Cart</li>

            </ul>
        </div>
        </>
    )
}

export default Nav_Bar;