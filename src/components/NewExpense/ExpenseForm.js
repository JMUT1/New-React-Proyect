import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmout, setEnteredAmour] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    
    const titleHandler =(event)=> {
        setEnteredTitle(event.target.value);

    };

    const amountHandler = (event)=>{
        setEnteredAmour(event.target.value);

    };

    const dateHandler =(event)=>{
        setEnteredDate(event.target.value);
    };

    const submitHandler= (event)=> {
        event.preventDefault();

        const expenseData ={
            title: enteredTitle,
            amount: enteredAmout,
            date: new Date (enteredDate)
        };
        console.log(expenseData);
    };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountHandler} min="0.01" step="0.01" />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateHandler} min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
