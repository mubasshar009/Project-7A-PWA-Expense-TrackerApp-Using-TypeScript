import { useState } from "react";
type Data = {
    textValue:string
    amount:number
    incomeExpense:string
}
let initialState :Data = {
    textValue:'',
    amount:0,
    incomeExpense:'',
}
type Props = {
  sendData :(val:Data) => void;
}

const AddNewTrans = ({sendData}:Props) => {

    let [data,setData] = useState<Data>(initialState)
    let handleSubmit = () =>  {
        // console.log(data);
        setData(
            initialState
        )
        sendData(data);
      
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
          <input type="radio" name="inEx" value="income" checked={data.incomeExpense === 'income'} onClick={() => setData({...data,incomeExpense:"income"})} />
          <label htmlFor="income">Expense</label>
          <input type="radio" name="inEx" value="expense" checked={data.incomeExpense ==='expense'} onClick={() => setData({...data,incomeExpense:"expense"})}/>
        </div>

        <label htmlFor="amount"> Amount</label>
        <input type="number" value={data.amount || ''} onChange={({target})=> setData({...data,amount:parseInt(target.value)})}/>
        <button onClick={handleSubmit}>Add Transaction</button>
      </div>
    </div>
  );
};

export default AddNewTrans;
