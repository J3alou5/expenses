import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

const Expenses = () => {
    const expenses = [
        {
          id: 'id1',
          date: new Date(2023, 9, 6),
          title: 'New Book',
          amount: 30.99
        },
        {
          id: 'id2',
          date: new Date(2023, 9, 6),
          title: 'New Jeans',
          amount: 99.99
        }
    ]  

    const saveYearDataHandler = (yearData) => {
      console.log(yearData);
    } 

    return (
        <Card className='expenses'>
            <ExpensesFilter onSaveYearData ={saveYearDataHandler}/>

           {
              expenses.map((expense) => {
                return <ExpenseItem expenseData = {expense} key={expense.id}/> 
              })
           } 

        </Card>
    )
} 

export default Expenses