import * as React from 'react';
import { message } from 'antd';
import ChangeProduct from './ChangeProduct';
import { getAllProducts, getAllCategories, changeProduct } from '../Reusable/services';
import Loading from '../Reusable/Loading';
import { StyledContent } from '../Reusable/Styles';

const Management = () => {
	const [loading, setLoading] = React.useState(true);
	const [categories, setCategories] = React.useState('');
	const [productsData, setProductData] = React.useState('');
	const [error, setError] = React.useState(false);

	const fetchData = () => {
		getAllProducts()
			.then(async (res) => {
				if (res.status === 200) {
					setProductData(res.data);
					getAllCategories()
						.then((result) => {
							if (result.status === 200) {
								setCategories(result.data);
								setLoading(false);
							}
						})
						.catch(() => {
							setError(true);
						});
				}
			})
			.catch(() => {
				setError(true);
			});
	};

	React.useEffect(() => {
		fetchData();
	}, []);

	const onSubmit = (e, form) => {
		e.preventDefault();
		form.validateFields((err, values) => {
			if (!err) {
				changeProduct(values)
					.then((res) => {
						if (res.status === 200) {
							message.success('Product changed successfully!', 2, () => fetchData());
						}
					})
					.catch(() => {
						message.error('Something went wrong!', 2, () => fetchData());
					});
			}
		});
	};

	return (
		loading && !error
			? <Loading />
			: (
				<StyledContent style={{ width: '100%', padding: 0 }}>
					<ol>
						{productsData.map(product => (
							<li key={product._id}>
								<ChangeProduct product={product} categories={categories} onSubmit={onSubmit} />
							</li>
						))}
					</ol>
				</StyledContent>
			)
	);
};

export default Management;
