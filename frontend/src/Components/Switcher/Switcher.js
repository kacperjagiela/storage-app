import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Managment from '../Managment/Management';
import AddProduct from '../Managment/AddProduct';

const Switcher = () => (
	<Switch>
		{/* <Route path='/' exact render={() => <Home onAdd={this.onAdd} />} /> */}
		<Route path='/manage' component={Managment} />
		<Route exact path='/add-product' component={AddProduct} />
	</Switch>
);

export default Switcher;
