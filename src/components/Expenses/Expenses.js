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

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterYearHandler} />
            {props.items.map((expense) => (
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </Card>
    );
};

export default Expenses;
