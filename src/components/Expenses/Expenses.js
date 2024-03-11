import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {

  const saveYearDataHandler = (yearData) => {
    console.log(yearData);
  } 

  return (
      <Card className='expenses'>
          <ExpensesFilter onSaveYearData ={saveYearDataHandler}/>

          {
            props.expenses.map((expense) => {
              return <ExpenseItem expenseData = {expense} key={expense.id}/> 
            })
          } 

      </Card>
  )
} 

export default Expenses