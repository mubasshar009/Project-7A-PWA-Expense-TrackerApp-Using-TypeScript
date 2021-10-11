import { useState } from "react";

const Balance = ({amount}:{amount:number}) => {
    
    return(
      <div className="Balance">
        <p style={{display:'flex',fontWeight:'bold'}}>Your Balance</p>
        <h1 style={{display:'flex'}}>{`$${amount}.00`}</h1>
      </div>
    )
  }
  
  export default Balance;
