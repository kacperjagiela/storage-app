import * as React from 'react';
import {
	Form, Icon, Input, Typography, Button, message,
} from 'antd';
import { StyledForm } from '../Reusable/Styles';
import { addCategory } from '../Reusable/services';


const AddCategory = ({ form }) => {
	const [buttonLoading, setButtonLoading] = React.useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setButtonLoading(true);
		form.validateFields((err, values) => {
			if (!err) {
				addCategory(values)
					.then(() => {
						message.success('Category added successfully.', 1, () => form.resetFields());
					})
					.catch(() => {
						message.error('Something went wrong!', 1, () => form.resetFields());
					});
			}
			setButtonLoading(false);
		});
	};

	return (
		<StyledForm>
			<Typography.Title>
				Add new category
			</Typography.Title>
			<Form onSubmit={e => handleSubmit(e)}>
				<Form.Item label='New category name:'>
					{form.getFieldDecorator('name', {
						rules: [{ required: true, message: 'Please enter category name!' }],
					})(
						<Input prefix={<Icon type='tag' />} placeholder='Name' allowClear />,
					)}
				</Form.Item>
				<Button type='primary' htmlType='submit' style={{ width: '60%' }} loading={buttonLoading}>
					Add category
				</Button>
			</Form>
		</StyledForm>
	);
};

export default Form.create({ name: 'add_category' })(AddCategory);
