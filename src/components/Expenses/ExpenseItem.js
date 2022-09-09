import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2022,3,3);
    // const expenseTitle = 'Car Insurance';
    // const expensePrice = 233.345;
    // const month = props.date.toLocaleString('en-US', {month: 'long'});
    // const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    // const year = props.date.getFullYear();

    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () =>{
    //     setTitle("updated");
    //     console.log(" clicked...")
    // }
    return (
    <Card className='expense-item'>
        <ExpenseDate date = {props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
    );

}

export default ExpenseItem;