type OProps = {
  textValue: string;
  amount: number;
  incomeExpense: string;
};

const History = ({ Data,handleFilter }: { Data: OProps[],handleFilter:()=>void }) => {
  console.log("Arr", Data);
  return (
    <div>
      <h1>History</h1>
      <hr />

      {Data.map((val: OProps) => (
        <div className="History" style={val.incomeExpense === 'income' ? {backgroundColor:'lightgreen'} : {backgroundColor:'rgb(248, 99, 99)'}} key={val.amount}>
          <h3 style={{display:'flex'}} >{val.textValue}</h3>
          <h3 style={{display:'flex'}}>{val.amount}</h3>
          <button onClick={handleFilter}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default History;
