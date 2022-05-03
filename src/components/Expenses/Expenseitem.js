import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../IU/Card";
import React from "react";


const Expenseitem = (props) => {
  const clickHandler =()=>{
    console.log("Click")
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default Expenseitem;
