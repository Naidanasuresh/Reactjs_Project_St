// how frontend developer show the data and isloading and error



// Timeline if fetching data is success (Very Important)
// 1. Run component function
// 2. Hit return "Loading..."
// 3. Paint UI
// 4. Run useEffect
// 5. fetch API
// 6. setdata()
// 7. setisloading(false)
// 8. React schedules re-render

// Second Render

// Now state is:

// data = {pikachu object}
// isloading = false
// error = null


// Component runs again:

// if (isloading) → false

// if (error) → false

// if (!data) → false

// So it reaches:

// return <p>{JSON.stringify(data)}</p>

// fetch success
// ↓
// setdata()
// ↓
// setisloading(false)
// ↓
// React schedules re-render
// ↓
// Component runs again from top
// ↓
// New JSX returned
// ↓
// DOM updated

// or 

// setisloading(false)
// ↓
// re-render
// ↓
// skip loading branch
// ↓
// hit final return
// ↓
// show real data
// ↓
// stop (stable UI)





// **when i give wrong ip address


// wrong URL
// ↓
// fetch throws error
// ↓
// catch runs
// ↓
// seterror()
// ↓
// finally runs
// ↓
// setisloading(false)
// ↓
// re-render
// ↓
// if(error) branch
// ↓
// show error UI

// Why does finally run after seterror()?
// Because this is normal JavaScript behavior, not React.


// fetch throws error
// ↓
// catch runs
// ↓
// seterror()   (marks state)
// ↓
// finally runs
// ↓
// setisloading(false) (marks state)
// ↓
// async function ends
// ↓
// React processes both state updates together
// ↓
// re-render happens


//After re-render 

// re-render
// ↓
// error branch hit
// ↓
// return error JSX
// ↓
// DOM update
// ↓
// STOP (idle)












import { useEffect, useState } from "react"

// Functional component with arrow function
const Pokemon=()=>{
    // State to store API data
    const [data, setdata]=useState(null)
    // State to track loading status
    const [isloading, setisloading]=useState(true)
    // State to store error message
    const [error, seterror]=useState(null)




    async function fetchGroceydata() {
        try{//risky code
            // Async function to fetch data from API

            const response=await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
             // Log raw response for debugging
            console.log(response)
            if(!response.ok){ // If response is not 200-299, throw custom error
                throw new Error('requesting data is failed -due to wrong api endpoint')
            }
        
            const pokemanData=await response.json();// data converted to json
            setdata(pokemanData)
             /*Store data in state  When this line runs: setdata(pokemanData)


React does three things:

Updates state

data becomes equal to pokemanData

Triggers re-render

The component runs again from top to bottom

UI updates automatically

Now this part runs:

<p>{JSON.stringify(data)}</p>


and shows the API result on screen. */
    console.log(data) // ❌ may still show old value


    }
        catch(error){//this error comes from either front end or back end
            console.error(error) // this is for developer 
            seterror(error.message)// default error throw means if ip address wrong it show failed to fetch data this is for users

    }
    finally{  // This always runs (success or error)
        setisloading(false) // isloading is false because whenever data found that data will show and isloading is removed 

    }
        
    }

    // Runs once when component mounts
    useEffect(()=>{
        fetchGroceydata() //“When this component loads for the first time, call fetchGroceydata().”

        console.log("Data changed:", data)
        console.log("Loading changed:", isloading)
    },  [])

     

    // If still loading, show loader
    if(isloading){// if the page is loading then it shows loading means  isloading is true
        console.log("loading...")
        return (
            <h1>Loading...</h1>
        )
        
    }

      if(error){ //// If error occurred, show error message
        return (
            <h1>Error {error}</h1>
        )
    }
  
    // If data is null or empty object

    if(!data || !Object.keys(data).length){ //checking whether the data is empty or not 
        console.log(data)
        return(
            <h1>Empty Data</h1>
        )
    }
   




     // If everything is successful, show data
    return(
        <>
        <h1>Pokemon</h1>
        <br />  
        {/* Convert object to string for display */}
        <p>{JSON.stringify(data)}</p>
        </>
    )
}
export default Pokemon;