import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, CloseOutlined } from '@ant-design/icons';

class View extends Component {

	onFinish = (values) => {
		console.log('Received values of form: ', values);
	};

	onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	render() {
		return (
			<Form
				className="login-form"
				onFinish={this.props.handleSubmit(this.onFinish)}
				onFinishFailed={this.onFinishFailed}
			>
				<Form.Item>
					<Field
						name="username"
						component={(params) => {
							const { input } = params;
							return <Input {...input} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
						}}
					/>
				</Form.Item>
				<Form.Item>
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

const LoginForm = reduxForm({
	form: 'login'
}) (View);

export { LoginForm };
