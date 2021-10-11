import { useState,useEffect } from "react";
import "./App.css";
import AddNewTrans from "./Components/AddNewTrans";
import Balance from "./Components/Balance";
import History from "./Components/History";
import InExChart from "./Components/InExChart";
import firebase from "./firebase";
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
  //Firebase Messaging
  useEffect(() => {
    const messaging = firebase.messaging();
    messaging
      .getToken()
      .then((token: string) => {
        console.log("newToken= ", token);
        console.log("Token....");
        
      })
      .catch((err) => console.log("Unable to get permission to notify,", err));
    navigator.serviceWorker.addEventListener("message", (message) =>
      console.log(message)
    );
  }, []);

  let [state, setState] = useState<objProps>(initialState);
  //let Data: Props[] = initialState;
  let [balanceState, setBalanceState] = useState<number>(0);
  let [incomeState, setIncomeState] = useState<number>(0);
  let [expenseState, setExpenseState] = useState<number>(0);

  let getData = (val: Props) => {
    setState({ Data: [...state.Data, val] });

    if (val.incomeExpense === "income") {
      setIncomeState(incomeState + val.amount);
      setBalanceState(balanceState + val.amount);
    } else if (val.incomeExpense === "expense") {
      setExpenseState(expenseState + val.amount);
      setBalanceState(balanceState - val.amount);
    }
  };
  let handleFilter = (val: Props) => {
    //Delete Item

    let removeItem = state.Data.filter((child: Props) => {
      return child.amount !== val.amount;
    });
    setState({ Data: removeItem });
    //Deleted Item

    let deleteItem = state.Data.filter((child: Props) => {
      return child.amount === val.amount;
    });
    deleteItem.map((child) => {
      if (child.incomeExpense === "income") {
        setIncomeState(incomeState - child.amount);
        setBalanceState(balanceState - child.amount);
      } else if (child.incomeExpense === "expense") {
        setExpenseState(expenseState - child.amount);
        setBalanceState(Math.abs(balanceState) - child.amount);
      }
    });
  };
  return (
    <div className="App">
      <h3>Expense Tracker App Using TypeScript</h3>

      <Balance amount={balanceState} />
      <InExChart income={incomeState} expense={expenseState} />
      <History Data={state.Data} handleFilter={handleFilter} />
      <AddNewTrans sendData={getData} />
    </div>
  );
}

export default App;
