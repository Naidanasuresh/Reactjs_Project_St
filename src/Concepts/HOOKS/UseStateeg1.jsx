import { useState } from "react";
import Primary_Button from "../../Components/PrimaryButton";


// react -> hook
/**
 * 1. hook is a function
 * 2. starts with "use"
 * 
 * useState
 * 1. pass an initial value of a state to the useState(initialState)
 * 2. it returs [state, setState]
 * 3. if you set the state via setState, react will schedule "re-render" of that component.
 * 4. re-render -> invoking the functional component i.e., function again.
 * 5.this time, even if the local binding will be created newly, the latest/ changed/ mutated state value will be assigned to the state variable  
 * 
 */

const UseState=()=>{

    function getdetails(firstname,lastname){
        console.log('Getdeatils function has been invoked')
        return `${firstname} ${lastname}`
    }
   
    // const [username, setusername]=useState('Suresh')
    const [username, setusername]=useState(()=>getdetails('Suresh','Naidana'))
    console.log('username',username)

     function attachlastname(lastname){
        setusername(`${username} ${lastname}`)
        
        
    }

    

    return(
        <>
        <h1>UseState</h1>
        <hr />
        <h2>{username}</h2>
        <Primary_Button onClick={()=>attachlastname("Naidana")}>Attach last name</Primary_Button>
        <Primary_Button onClick={()=>attachlastname("Naidana")}>Click Here</Primary_Button>
        </>

    )

}


export default UseState;

