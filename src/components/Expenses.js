
import ExpenseItem from './Expenseitem';
import './Expenses.css'; 

function Expenses(props) {
    console.log(props);
    
    return (
      <div>
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    );
  }
  

export default Expenses;
