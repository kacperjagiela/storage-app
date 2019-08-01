import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Managment from '../Managment/Managment';

export default class App extends React.Component {
	render() {
		return (
			<Switch>
				<Route path='/' exact render={() => <Home onAdd={this.onAdd} />} />
				<Route path='/manage' render={() => <Managment log={this.log} />} />
			</Switch>
		);
	}
}
