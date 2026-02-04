import { useState, useEffect } from "react";
import Primary_Button from "../../Components/PrimaryButton";

const UseEffect = () => {
  const [Count, setCount] = useState(0);
  console.log("Count value after every render: ", Count);
 


    useEffect(() => {
      console.log("useEffect-1 has been triggered every time")
  });

  
    useEffect(() => {
    console.log("useEffect-2 has been triggered it can only call one time while mounting");
  }, []);


  // componentDidUpdate()
  useEffect(() => {
    console.log("useEffect3 it can only call based on dependeces");
  }, [Count]);
  



  function incrementCount() {
    console.log("Increment Button has been clicked!")
    setCount(Count+1)
    console.log('before triggered',Count)
  }

  return (
    <>
        <h1>UseEffect Hook</h1>
        <br />
      <p>{Count}</p>
      <br />
      <Primary_Button onClick={incrementCount}>IncrementCount</Primary_Button>
    </>
  );
};

export default UseEffect;
