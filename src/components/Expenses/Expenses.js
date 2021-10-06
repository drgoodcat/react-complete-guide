import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card";
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
  return <Card className="expenses">{data}</Card>;
}

export default Expenses;
