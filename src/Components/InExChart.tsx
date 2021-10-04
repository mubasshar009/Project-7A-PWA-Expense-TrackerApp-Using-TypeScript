const InExChart = ({income,expense}:{income:number,expense:number}) => {
    return (
        <div className="parent-inex">
            <div className="income">
                <h2>Income</h2>
                <h2 style={{color:'green'}}>{`$${income}.00`}</h2>
            </div>
            <div className="expense">
                <h2>Expense</h2>
                <h2 style={{color:'red'}}>{`$${expense}.00`}</h2>
            </div>
        </div>
    )
}

export default InExChart
