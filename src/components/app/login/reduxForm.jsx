import React, { Component } from 'react';
import { reduxForm } from "redux-form";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone, CloseOutlined } from '@ant-design/icons';

class ReduxForm extends Component {

	onFinish = (values) => {
		console.log('Received values of form: ', values);
	};

	onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	render() {
		return (
			<Form
				name="normal_login"
				className="login-form"
				onFinish={this.onFinish}
				onFinishFailed={this.onFinishFailed}
			>
				<Form.Item
					name="username"
					rules={[
						{
							required: true,
							message: 'Please input your Username!',
						},
					]}
				>
					<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: 'Please input your Password!',
						},
					]}
					iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}

				>
					<Input
						prefix={<LockOutlined className="site-form-item-icon" />}
						type="password"
						placeholder="Password"
					/>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" className="login-form-button">
						Sign in
					</Button>
					<Button icon={<CloseOutlined />} className="cancel-form-button" danger>
						Cancel
					</Button>
				</Form.Item>
			</Form>
		)
	}
}

ReduxForm = reduxForm({
	form: 'login'
}) (ReduxForm);

export default ReduxForm;
