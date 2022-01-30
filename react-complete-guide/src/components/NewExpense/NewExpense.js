import {useState} from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing,setIsEditing] = useState(false)

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>AddExpense</button>}
            {isEditing && <ExpenseForm onCancelExpense={stopEditingHandler} onSaveExpenseData={saveExpenseHandler}/>}

        </div>
    )
}

export default NewExpense;