import { ProfileCard } from "../profileCard";

const employees=[
    {
        id:1,
       
        name:"Suresh",
        Designation:"FullStack Developer"
    },
      {
        id:2,
       
        name:"Sai Pream",
        Designation:"Mern Stack Developer"
    }
    , {
        id:3,
        
        name:"Gopal",
        Designation:"Dot Net Developer"
    }
]


function Map(){
    return(
        <>
        {
            employees.map((employee)=>(
                <ProfileCard key={employee.id} name={employee.name} Designation={employee.Designation} id={employee.id}/>

            ))
        }
        </>
    )
}

export default Map;