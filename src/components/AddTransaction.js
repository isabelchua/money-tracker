import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);
	const [expense, setExpense] = useState(false);

	const { addTransaction } = useContext(GlobalContext);

	const onSubmit = e => {
		e.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			text,
			//convert string to a number
			amount: +amount
		};

		addTransaction(newTransaction);
	};

	const clickExpense = e => {
		e.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			text,
			//convert string to a number
			amount: -Math.abs(+amount)
		};

		addTransaction(newTransaction);
	};

	// function clickExpense() {
	// 	return -Math.abs(amount);
	// }

	return (
		<>
			<form onSubmit={onSubmit}>
				<div className='form-control'>
					<label htmlFor='text'>Transaction Name</label>
					<input
						type='text'
						value={text}
						onChange={e => setText(e.target.value)}
						placeholder=''
						required
					/>
				</div>
				<div className='form-control'>
					<label ftmlFor='amount'>
						Amount <br />
					</label>
					<input
						type='number'
						value={amount}
						onChange={e => setAmount(e.target.value)}
						placeholder='Enter Amount..'
					/>
				</div>
				<button className='btn inc'>ADD INCOME</button>
				<button onClick={clickExpense} className='exp btn'>
					ADD EXPENSE
				</button>
			</form>
		</>
	);
};
