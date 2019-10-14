import * as React from 'react';
import {
	Form, Icon, Input, Select, Typography, InputNumber, Button, message,
} from 'antd';
import { StyledForm } from '../Reusable/Styles';
import { getAllCategories, addProduct } from '../Reusable/services';
import Loading from '../Reusable/Loading';

const { Option } = Select;

const AddProduct = ({ form }) => {
	const [categories, setCategories] = React.useState('');
	const [buttonLoading, setButtonLoading] = React.useState(false);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);

	const fetchData = () => {
		getAllCategories()
			.then((res) => {
				if (res.status === 200) {
					setCategories(res.data);
					setLoading(false);
				}
			})
			.catch(() => {
				setError(true);
			});
	};

	React.useEffect(() => {
		fetchData();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setButtonLoading(true);
		form.validateFields((err, values) => {
			if (!err) {
				addProduct(values)
					.then((res) => {
						if (res.status === 200) {
							message.success('Product added successfully.', 1, () => form.resetFields());
						} else {
							message.error('Something went wrong!', 1, () => form.resetFields());
						}
					});
			}
			setButtonLoading(false);
		});
	};

	return (
		loading && !error
			? <Loading />
			: (
				<StyledForm>
					<Typography.Title>
						Add new product
					</Typography.Title>
					<Form onSubmit={e => handleSubmit(e)}>
						<Form.Item label='Product name:'>
							{form.getFieldDecorator('name', {
								rules: [{ required: true, message: 'Please enter product name!' }],
							})(
								<Input prefix={<Icon type='tag' />} placeholder='Name' allowClear />,
							)}
						</Form.Item>
						<Form.Item label='Category:'>
							{form.getFieldDecorator('category', {
								rules: [{ required: true, message: 'Please choose product category!' }],
							})(
								<Select>
									{categories.map(category => (
										<Option value={category.name} key={category._id}>{category.name}</Option>
									))}
								</Select>,
							)}
						</Form.Item>
						<Form.Item label='Quantity:'>
							{form.getFieldDecorator('quantity', {
								rules: [{ required: true, message: 'Please enter quantity!' }],
							})(
								<InputNumber min={0} prefix={<Icon type='tag' />} placeholder='Quantity' allowClear />,
							)}
						</Form.Item>
						<Form.Item label='Price for one product:'>
							{form.getFieldDecorator('price', {
								rules: [{ required: true, message: 'Please enter price!' }],
							})(
								<InputNumber min={0} prefix={<Icon type="dollar" />} placeholder='Price' allowClear />,
							)}
						</Form.Item>
						<Button type='primary' htmlType='submit' style={{ width: '60%' }} loading={buttonLoading}>
							Add product
						</Button>
					</Form>
				</StyledForm>
			)
	);
};

export default Form.create({ name: 'add_product' })(AddProduct);
