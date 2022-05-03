import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../IU/Card";
import React, { useState } from "react";

const Expenseitem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler =()=>{
    setTitle("Update");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default Expenseitem;
