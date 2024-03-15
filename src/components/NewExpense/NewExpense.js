import { useState } from 'react' 
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const [editForm, setEditForm] = useState(false)

    const showFormHandler = () => {
        setEditForm(true)
    }
    
    const hideFormHandler = () => {
        setEditForm(false)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        } 
        props.onAddExpense(expenseData)
        setEditForm(false)
    }

    return (
        <div className='new-expense'>
            {!editForm && (
                <button onClick={showFormHandler}>Add New Expense</button>
            )}
            {editForm && (
                <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={hideFormHandler}
                />
            )}
        </div>
    )
} 

export default NewExpense