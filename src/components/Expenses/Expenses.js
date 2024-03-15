import {useState} from 'react' 
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {

  const [filteredExpenses, setFilteredExpenses] = useState(props.expenses)

  const saveYearDataHandler = (yearData) => {
    const yearToFilter = parseInt(yearData, 10)

    if (isNaN(yearToFilter)) {
      setFilteredExpenses(props.expenses)
    } else {
      const filteredArray = props.expenses.filter(item => item.date.getFullYear() === yearToFilter)
      setFilteredExpenses(filteredArray)
    } 
  }

  return (
      <Card className='expenses'>
          <ExpensesFilter onSaveYearData ={saveYearDataHandler}/>         
          <ExpensesList expenses = {filteredExpenses}/> 
      </Card>
  )
} 

export default Expenses