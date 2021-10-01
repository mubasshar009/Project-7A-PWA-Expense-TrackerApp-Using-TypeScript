import { useState } from "react";
type Data = {
    textValue:string
    amount:number
    incomeExpense:string
}
let initilState :Data = {
    textValue:'',
    amount:0,
    incomeExpense:''
}

const AddNewTrans = () => {

    let [data,setData] = useState(initilState)
    let handleSubmit = () => {
        console.log(data);
        setData(
            initilState
        )
    }

  return (
    <div>
      <h3>Add New Transaction</h3>
      <hr />
      <div className="trans-form">
        <label htmlFor="text">Text</label>
        <input type="text" value={data.textValue} onChange={(event) => setData({...data,textValue:event.target.value})}/>
        <div>
          <label htmlFor="income">Income</label>
          <input type="radio" name="inEx" value="income" onClick={() => setData({...data,incomeExpense:"income"})} />
          <label htmlFor="income">Expense</label>
          <input type="radio" name="inEx" value="expense" onClick={() => setData({...data,incomeExpense:"expense"})}/>
        </div>

        <label htmlFor="amount"> Amount</label>
        <input type="number" value={data.amount} onChange={({target})=> setData({...data,amount:parseInt(target.value)})}/>
        <button onClick={handleSubmit}>Add Transaction</button>
      </div>
    </div>
  );
};

export default AddNewTrans;
