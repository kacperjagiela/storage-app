import * as React from 'react';
import { Form, Icon, Input } from 'antd';
import { StyledForm } from '../Reusable/Styles';

const AddProduct = ({ form }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<StyledForm>
			<Form onSubmit={e => handleSubmit(e)}>
				<Form.Item>
					{form.getFieldDecorator('name', {
						rules: [{ required: true, message: 'Please enter object name!' }],
					})(
						<Input prefix={<Icon type='tag' />} placeholder='Name' allowClear />,
					)}
				</Form.Item>
				<Form.Item>
					{form.getFieldDecorator('category', {
						rules: [{ required: true, message: 'Please enter object name!' }],
					})(
						<Input prefix={<Icon type='tag' />} placeholder='Name' allowClear />,
					)}
				</Form.Item>
			</Form>
		</StyledForm>
	);
};

export default Form.create({ name: 'add_product' })(AddProduct);
