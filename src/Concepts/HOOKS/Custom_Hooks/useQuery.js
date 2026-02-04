import { useState, useEffect } from "react";

function useQuery(fetchurl){

    const [data, setData]=useState(null);
    const [isLoading, setisLoading]=useState(true);
    const [error, setError]=useState(null);

    async function fetchingData() {
        try{
            const response =await fetch(fetchurl)
            
            if (!response.ok){
                throw new Error('Requesting data is failed- wrong api endpoint')
            }
            const Pokemondata=await response.json();
            setData(Pokemondata)
        }
        catch(error){
            console.error
            setError(error.message)
        }
        finally{
            setisLoading(false)
        }
        
    }

    useEffect(()=>{
        fetchingData()
    },[])

    return {data, isLoading, error}




   


}

export default useQuery;