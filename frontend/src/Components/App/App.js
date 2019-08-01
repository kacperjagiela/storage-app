import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { getAllProducts } from '../Reusable/services';
import './App.css';
import Home from '../Home/Home';
import Managment from '../Managment/Managment';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		};
		this.fetchData();
	}

	fetchData = async () => {
		await getAllProducts().then((res) => {
			console.log(res);
			this.setState({
				items: res
			});
		});
	}

	render() {
		return (
			<Switch>
				<Route path='/' exact render={() => <Home onAdd={this.onAdd} />} />
				<Route path='/manage' render={() => <Managment log={this.log} />} />
			</Switch>
		);
	}
}
