import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "./ExpensesFilter.js";
import Card from "../UI/Card";
import { useState } from "react";
import "./Expenses.css";

import React from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filtered = props.items.filter((expense) => expense.items === filteredYear);

    console.log(props.items.date);
    console.log(filtered);
    console.log(filteredYear);
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterYearHandler} />
            {props.items.map((expense) => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </Card>
    );
};

export default Expenses;
