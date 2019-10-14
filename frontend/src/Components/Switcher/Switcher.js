import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Managment from '../Managment/Management';
import AddProduct from '../Managment/AddProduct';
import Shop from '../Shop/Shop';
import AllCategories from '../Categories/AllCategories';
import AddCategory from '../Categories/AddCategory';

const Switcher = () => (
	<Switch>
		<Route exact path='/manage' component={Managment} />
		<Route exact path='/add-product' component={AddProduct} />
		<Route exact path='/add-category' component={AddCategory} />
		<Route exact path='/all-categories' component={AllCategories} />
		<Route path='/' component={Shop} />
	</Switch>
);

export default Switcher;
