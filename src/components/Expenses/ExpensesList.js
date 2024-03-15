import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {
    
    if (props.expenses.length === 0) {
        return(
            <p className='expenses-list__fallback'>No expenses found</p>
        )
    } else {
        return(
            <ul className='expenses-list'>
                {
                props.expenses.map((expense) => {
                return <ExpenseItem expenseData = {expense} key={expense.id}/> 
                })
                } 
            </ul>
        )
    }
} 

export default ExpenseList