import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState("2022");

    const onChangeFilterHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
        console.log("selectedYear");
        console.log(selectedYear);
    };

    const expenses_filter = props.items.filter((expense) => { 
        return expense.date.getFullYear().toString() === filteredYear
    });

    
    
    return(
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeFilterHandler}/>
                {/* {
                    expenses_filter.length === 0? <p>No content</p>: expenses_filter.map((expense) => (<ExpenseItem 
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}/>))
                } */}
                {/* {expense_content} */}
                <ExpenseChart expenses={expenses_filter}/>
                <ExpenseList  items={expenses_filter}/>
                
            </Card>
        </div>
    );
}

export default Expenses;