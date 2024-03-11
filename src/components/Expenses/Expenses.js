import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'

const Expenses = () => {
    const expenses = [
        {
          date: new Date(2023, 9, 6),
          title: 'New Book',
          price: 30.99
        },
        {
          date: new Date(2023, 9, 6),
          title: 'New Jeans',
          price: 99.99
        }
    ]  
    return (
        <Card className='expenses'>
            <ExpenseItem
            expenseData = {expenses[0]}  
            />
            <ExpenseItem
            expenseData = {expenses[1]}  
            />
        </Card>
    )
} 

export default Expenses