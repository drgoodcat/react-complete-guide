import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";

import React from "react";

function Expenses(props) {
  const data = props.expenses.map((expenses) => {
    return (
      <ExpenseItem
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    );
  });
  return <div>{data}</div>;
}

export default Expenses;
