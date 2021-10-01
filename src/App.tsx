import "./App.css";
import AddNewTrans from "./Components/AddNewTrans";
import Balance from "./Components/Balance";
import History from "./Components/History";
import InExChart from "./Components/InExChart";

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker App Using TypeScript</h1>
      <Balance />
      <InExChart />
      <History />
      <AddNewTrans /> 
    </div>
  );
}

export default App;
