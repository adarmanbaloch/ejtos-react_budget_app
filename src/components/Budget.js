import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, setBudget, spending } = useContext(AppContext);
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
    const newBudget = parseInt(event.target.value);
    if (newBudget > 2000) {
      alert("The budget cannot be more than 2000.");
      setNumber('2000');
    } else {
      setNumber(event.target.value);
      setBudget(newBudget);
    }

    if (newBudget < spending) {
      alert(`Error: The budget cannot be lower than the spending. The current spending is £${spending}, but the budget is only £${newBudget}. Please increase the budget or decrease the spending.`);
    }
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: £{budget}</span>
      <input
        type='number'
        id='number'
        value={number}
        max={2000}
        style={{ marginLeft: '2rem', size: 10 }}
        onChange={handleChange}
      />
    </div>
  );
};

export default Budget;
