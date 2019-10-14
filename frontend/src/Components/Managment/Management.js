import * as React from 'react';
import { Typography } from 'antd';
import { getAllProducts } from '../Reusable/services';
import Loading from '../Reusable/Loading';
import { StyledContent } from '../Reusable/Styles';

const Management = () => {
	const [loading, setLoading] = React.useState(true);
	const [productsData, setProductData] = React.useState('');
	const [error, setError] = React.useState(false);

	React.useEffect(() => {
		const fetchData = () => {
			getAllProducts()
				.then((res) => {
					if (res.status === 200) {
						setProductData(res.data);
						setLoading(false);
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
				<StyledContent>
					{productsData.map(product => (
						<Typography.Paragraph key={product._id}>
							{product.name} from {product.category} for price {product.price} in stock {product.quantity}
						</Typography.Paragraph>
					))}
				</StyledContent>
			)
	);
};

export default Management;
