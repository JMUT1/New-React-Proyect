import Expenseitem from "./Expenseitem";
import "./Expenses.css";
import React, { useState } from "react";
import Card from "../IU/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((expense) => (
        <Expenseitem
          key = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}

    </Card>
  );
};

export default Expenses;
