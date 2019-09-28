import * as React from 'react';
import { getAllProducts } from '../Reusable/services';

const Management = () => {
	const [loading, setLoading] = React.useState(true);
	const [data, setData] = React.useState('');
	const [error, setError] = React.useState(false);

	React.useEffect(() => {
		const fetchData = () => {
			getAllProducts()
				.then((res) => {
					if (res.status === 200) {
						setData(res.data);
					}
				})
				.catch(() => {
					setError(true);
				});
		};
		fetchData();
	}, []);
	return (
		<p>
			{data}
		</p>
	);
};

export default Management;
