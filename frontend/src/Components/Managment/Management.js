import * as React from 'react';
import { getAllProducts } from '../Reusable/services';
import Loading from '../Reusable/Loading';
import { StyledContent } from '../Reusable/Styles';

const Management = () => {
	const [loading, setLoading] = React.useState(true);
	const [data, setData] = React.useState('');
	const [error, setError] = React.useState(false);

	React.useEffect(() => {
		const fetchData = () => {
			getAllProducts()
				.then((res) => {
					console.log(res);
					if (res.status === 200) {
						setData(res.data[0].name);
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
					<p>
						{data}
					</p>
				</StyledContent>
			)
	);
};

export default Management;
