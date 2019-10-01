import * as React from 'react';
import { Layout, Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import Switcher from '../Switcher/Switcher';

const { Header, Content, Footer } = Layout;

const App = ({ history }) => {
	const path = history.location.pathname;

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Header>
				<Menu
					theme='dark'
					mode='horizontal'
					defaultSelectedKeys={[path]}
					style={{ lineHeight: '64px' }}
				>
					<Menu.Item key='/shop'>
						<Link to='/shop'>
							Shop
						</Link>
					</Menu.Item>
					<Menu.Item key='/manage'>
						<Link to='/manage'>
							Manage products
						</Link>
					</Menu.Item>
					<Menu.Item key='/all-categories'>
						<Link to='/all-categories'>
							All categories
						</Link>
					</Menu.Item>
					<Menu.Item key='/add-product'>
						<Link to='/add-product'>
							Add product
						</Link>
					</Menu.Item>
					<Menu.Item key="add-category">
						<Link to='/add-category'>
							Add category
						</Link>
					</Menu.Item>
				</Menu>
			</Header>
			<Content style={{
				width: '100%', height: '100%',
			}}
			>
				<Switcher />
			</Content>
			<Footer style={{ width: '100%', textAlign: 'center' }}>
				Created by Kacper Jagieła
			</Footer>
		</Layout>
	);
};

export default withRouter(App);
