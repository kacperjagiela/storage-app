import * as React from 'react';
import {
	Form, Input, Icon, InputNumber, Select,
} from 'antd';

const { Option } = Select;

const ChangeProduct = ({ form, product, categories }) => {
	const handleSubmit = () => {

	};

	return (
		<Form layout='inline'>
			<Form.Item label="Product name:">
				{form.getFieldDecorator('name', {
					rules: [{ required: true, message: 'Product name:' }],
					initialValue: product.name,
				})(
					<Input prefix={<Icon type='tag' />} style={{ width: '80%' }} placeholder='Name' allowClear />,
				)}
			</Form.Item>
			<Form.Item label='Category:'>
				{form.getFieldDecorator('category', {
					rules: [{ required: true, message: 'Product category:' }],
					initialValue: product.category,
				})(
					<Select style={{ minWidth: '100px' }}>
						{categories.map(category => (
							<Option value={category.name} key={category._id}>{category.name}</Option>
						))}
					</Select>,
				)}
			</Form.Item>
			<Form.Item label='Quantity:'>
				{form.getFieldDecorator('quantity', {
					rules: [{ required: true, message: 'Quantity:' }],
					initialValue: product.quantity,
				})(
					<InputNumber min={0} prefix={<Icon type='tag' />} placeholder='Quantity' allowClear />,
				)}
			</Form.Item>
			<Form.Item label='Price for one product:'>
				{form.getFieldDecorator('price', {
					rules: [{ required: true, message: 'Price:' }],
					initialValue: product.price,
				})(
					<InputNumber min={0} prefix={<Icon type="dollar" />} placeholder='Price' allowClear />,
				)}
			</Form.Item>
		</Form>
	);
};

export default Form.create()(ChangeProduct);
