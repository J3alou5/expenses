import './App.css';
import ExpenseItem from './components/Expenseitem'

function App() {
  const expense = [
  {
    date: new Date(2023, 9, 6),
    Title : 'New Book',
    price : 30.99
  },
  {
    date: new Date(2023, 9, 6),
    Title : 'New Jeans',
    price : 99.99
  }
  ]
  return (
    <div className='App'>
      <ExpenseItem 
        expenseData={expense[0]}
      />
      <ExpenseItem 
        expenseData={expense[1]}
      />
    </div>
  );
}

export default App;
