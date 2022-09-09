import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpenses = (props) =>{

    const [edited, setEdited] = useState(false);

    const SaveExpense = (expenseData) =>{
        const expense ={
            ...expenseData,
            id: Math.random().toString()
    };
        console.log(expense);
        props.onAddExpense(expense);
        setEdited(false);
    }

    const startEditingHandler =() =>{
        setEdited(true);
    };

    const stopEditingHandler = ()=>{
        setEdited(false);
      }

    return(
        <div className='new-expense'>
            {!edited && <button onClick={startEditingHandler}>Add New Expense</button>}
            {edited && <ExpenseForm onSaveExpense={SaveExpense} onCancel={stopEditingHandler}/>}
        </div>
    );

}

export default NewExpenses;