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
    const expenses = props.expenses;

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterYearHandler} />
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
        </Card>
    );
};

export default Expenses;
