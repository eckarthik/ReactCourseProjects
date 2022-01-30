import { useState } from "react";
import ExpensesList from "./ExpensesList";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpenseChart";

function Expenses(props) {

    const [selectedYear,setSelectedYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        console.log('Expenses.js');
        setSelectedYear(selectedYear)
    }
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={selectedYear} onFilterChange={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </div>

    )
}

export default Expenses;