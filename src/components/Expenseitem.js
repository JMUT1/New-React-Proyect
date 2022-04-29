import "./ExpenseItem.css";

const Expenseitem = () => {


  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmout}</div>
      </div>
    </div>
  );
};

export default Expenseitem;
