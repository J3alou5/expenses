import {useState} from 'react' 
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DYMMY_EXPENSES = [
  {
    id: 'id1',
    date: new Date(2023, 1, 19),
    title: 'New Book',
    amount: 39.99
  },
  {
    id: 'id2',
    date: new Date(2024, 2, 20),
    title: 'New Jeans',
    amount: 99.99
  },
 {
  id: 'id3',
  date: new Date(2024, 3, 25),
  title: 'New Bag',
  amount: 139.99
 } 
]

const App = () => {
  const [expenses, setExpenses] = useState(DYMMY_EXPENSES) 

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses] 
    })
  } 

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;