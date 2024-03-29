import './ExpenseForm.css'
import {useState} from 'react' 

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')   

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    } 

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }
    
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData) 
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    } 

    const cancelHandler = () => {
        props.onCancel()
    }  

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2023-01-01" max="2025-01-31" onChange={dateChangeHandler} value={enteredDate}></input>
                </div>
            </div>
            <div className='new-expense__actions'> 
                <button type="submit">Add Expense</button>
                <button type='button' onClick={cancelHandler} className='cancel'>Cancel</button>
            </div>
        </form>
    )
} 

export default ExpenseForm