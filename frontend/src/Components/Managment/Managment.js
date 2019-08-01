import * as React from 'react';
import { addProduct } from '../Reusable/services';

export default class Managment extends React.Component {
	state = {
		name: '',
		description: '',
		quantity: 0,
		unit: '',
	}

	onValueChange = (e, label) => {
		this.setState({
			[label]: e.target.value,
		});
		console.log(this.state);
	}

	onSubmit = (e) => {
		e.preventDefault();
		const { state } = this;
		addProduct(state);
	}

	render() {
		return (
			<div className='managment'>
				<form onSubmit={e => this.onSubmit(e)}>
					<label htmlFor='name'>
						Name:
						<input type='text' name='name' onChange={e => this.onValueChange(e, 'name')} />
					</label><br />
					<label htmlFor='description'>
						Description:
						<input type='text' name='description' onChange={e => this.onValueChange(e, 'description')} />
					</label><br />
					<label htmlFor='quantity'>
						Quantity:
						<input type='number' name='quantity' onChange={e => this.onValueChange(e, 'quantity')} />
					</label><br />
					<label htmlFor='unit'>
						Unit
						<input type='text' name='unit' onChange={e => this.onValueChange(e, 'unit')} />
					</label><br />
					<button type='submit'>Add product</button>
				</form>
			</div>
		);
	}
}
