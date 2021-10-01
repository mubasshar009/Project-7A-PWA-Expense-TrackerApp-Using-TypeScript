import { useState } from "react";

const Balance = () => {
    let [balance,setBalance] = useState({
        currentBalance:0
    })
    return(
      <div className="Balance">
        <p>Your Balance</p>
        <h1>{`$${balance.currentBalance}.00`}</h1>
      </div>
    )
  }
  
  export default Balance;
