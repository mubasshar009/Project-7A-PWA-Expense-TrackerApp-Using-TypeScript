type OProps = {
  textValue: string;
  amount: number;
  incomeExpense: string;
};

const History = ({ Data,handleFilter }: { Data: OProps[],handleFilter:(val:OProps)=>void }) => {
  return (
    <div>
      <h1>History</h1>
      <hr />

      {Data.map((val: OProps) => (
        <div className="History" style={val.incomeExpense === 'income' ? {backgroundColor:'lightgreen'} : {backgroundColor:'rgb(248, 99, 99)'}} key={val.amount}>
          <h4>{val.textValue}</h4>
          <h4>{val.amount}</h4>
          <button style={{borderRadius:'40px', padding:'9px',borderColor:'navajowhite',backgroundColor:'whitesmoke',cursor:'pointer',border:'1px'}} onClick={() => handleFilter(val)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default History;
