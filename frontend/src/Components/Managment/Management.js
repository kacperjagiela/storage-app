import * as React from 'react';
import ChangeProduct from './ChangeProduct';
import { getAllProducts, getAllCategories } from '../Reusable/services';
import Loading from '../Reusable/Loading';
import { StyledContent } from '../Reusable/Styles';

const Management = () => {
	const [loading, setLoading] = React.useState(true);
	const [categories, setCategories] = React.useState('');
	const [productsData, setProductData] = React.useState('');
	const [error, setError] = React.useState(false);

	React.useEffect(() => {
		const fetchData = () => {
			getAllProducts()
				.then(async (res) => {
					if (res.status === 200) {
						setProductData(res.data);
						getAllCategories()
							.then((result) => {
								if (result.status === 200) {
									setCategories(res.data);
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
		fetchData();
	}, []);
	return (
		loading && !error
			? <Loading />
			: (
				<StyledContent style={{ width: '100%', paddingLeft: '5%', paddingRight: '5%' }}>
					<ol>
						{productsData.map(product => (
							<li>
								<ChangeProduct key={product._id} product={product} categories={categories} />
							</li>
						))}
					</ol>
				</StyledContent>
			)
	);
};

export default Management;
