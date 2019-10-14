import * as React from 'react';
import { getAllCategories } from '../Reusable/services';
import Loading from '../Reusable/Loading';
import { StyledContent } from '../Reusable/Styles';

const AllCategories = () => {
	const [data, setData] = React.useState('');
	const [error, setError] = React.useState(false);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		const fetchData = () => {
			getAllCategories()
				.then((res) => {
					if (res.status === 200) {
						res.data.sort();
						setData(res.data);
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
					<ol>
						{data.map(category => (
							<li key={category._id}>{category.name}</li>
						))}
					</ol>
				</StyledContent>
			)
	);
};

export default AllCategories;
