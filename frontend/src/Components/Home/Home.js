import * as React from 'react';
import { getAllProducts, removeProduct } from '../Reusable/services';


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
		};
		this.fetchData();
	}

	fetchData = async () => {
		await getAllProducts().then((res) => {
			console.log(res);
			this.setState({
				items: res.data,
			});
		});
	}

	deleteProduct = async (id) => {
		await removeProduct(id).then((res) => {
			if (res.data) this.fetchData();
		});
	}

	render() {
		const { items } = this.state;
		return (
			<div className='home'>
				{
					items.map(item => (
						<div className='home-product' key={item.id}>
							<p>
								{`name: ${item.name} description: ${item.description} quantity: ${item.quantity} unit: ${item.unit}`}
							</p>
							<button type='button' onClick={() => this.deleteProduct(item.id)}>Delete</button>
						</div>
					))
				}
			</div>
		);
	}
}

export default Home;
