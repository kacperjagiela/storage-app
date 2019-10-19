import * as React from 'react';
import {
	Form, Input, Icon, InputNumber, Select, Button, Descriptions,
} from 'antd';

const { Option } = Select;

const ChangeProduct = ({ form, product, categories, onSubmit }) => (
	<Form layout='inline' style={{ marginBottom: '10px', marginTop: '10px' }} onSubmit={e => onSubmit(e, form)}>
		<Descriptions
			bordered
			column={{
				xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1,
			}}
			style={{ marginBottom: '5px' }}
		>
			<Descriptions.Item label='Name'>
				<Form.Item>
					{form.getFieldDecorator('name', {
						rules: [{ required: true, message: 'Product name:' }],
						initialValue: product.name,
					})(
						<Input prefix={<Icon type='tag' />} placeholder='Name' allowClear />,
					)}
				</Form.Item>
			</Descriptions.Item>
			<Descriptions.Item label='Category'>
				<Form.Item>
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
			</Descriptions.Item>
			<Descriptions.Item label='Quantity'>
				<Form.Item>
					{form.getFieldDecorator('quantity', {
						rules: [{ required: true, message: 'Quantity:' }],
						initialValue: product.quantity,
					})(
						<InputNumber min={0} prefix={<Icon type='tag' />} placeholder='Quantity' allowClear />,
					)}
				</Form.Item>
			</Descriptions.Item>
			<Descriptions.Item label='Price for one product'>
				<Form.Item>
					{form.getFieldDecorator('price', {
						rules: [{ required: true, message: 'Price:' }],
						initialValue: product.price,
					})(
						<InputNumber min={0} prefix={<Icon type="dollar" />} placeholder='Price' allowClear />,
					)}
				</Form.Item>
			</Descriptions.Item>
		</Descriptions>
		<Button type='primary' htmlType='submit'>
			Change product
		</Button>
	</Form>
);

export default Form.create()(ChangeProduct);
