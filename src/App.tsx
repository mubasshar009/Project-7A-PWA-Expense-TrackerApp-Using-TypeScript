import { useState } from "react";
import "./App.css";
import AddNewTrans from "./Components/AddNewTrans";
import Balance from "./Components/Balance";
import History from "./Components/History";
import InExChart from "./Components/InExChart";
type Props = {
  textValue: string;
  amount: number;
  incomeExpense: string;
};
type objProps = {
  Data: Props[];
};
let initialState: objProps = {
  Data: [],
};

function App() {
  let [state, setState] = useState<objProps>(initialState);
  //let Data: Props[] = initialState;
  let [balanceState,setBalanceState] = useState<number>(0)
  let [incomeState,setIncomeState] = useState<number>(0);  
  let [expenseState,setExpenseState] = useState<number>(0);  
  
  let getData = (val: Props) => {
    setState({ Data: [...state.Data, val] });
    
    if(val.incomeExpense === 'income'){
      setIncomeState(val.amount);
      setBalanceState(balanceState + val.amount)
    }else if (val.incomeExpense === 'expense'){
      setExpenseState(val.amount);
      setBalanceState(balanceState - val.amount)
    }
    console.log("Balance State",balanceState);
    
  };
  let handleFilter = () => {
  //Delete Item
  console.log("Clik");
    
   
  }
  return (
    <div className="App">
      <h3>Expense Tracker App Using TypeScript</h3>

      <Balance amount = {balanceState}/>
      <InExChart income={incomeState} expense={expenseState}/>
      <History Data={state.Data} handleFilter={handleFilter}/>
      
      <AddNewTrans sendData={getData} />
    </div>
  );
}

export default App;
