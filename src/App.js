import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      date: new Date(2024, 9, 19),
      title: 'New Book',
      amount: 39.99
    },
    {
      date: new Date(2024, 9, 19),
      title: 'New Jeans',
      amount: 99.99
    }
  ];

  return (
    <div className="App">
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
