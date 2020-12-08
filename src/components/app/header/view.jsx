import './style.scss';
import React, {useState} from 'react';
import { Button, Col, Row, Modal } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { Logo } from '../logo';
import { NavBar } from '../navbar';
import { LoginForm } from "../login";

const View = () => {

	const [isModalVisible, setIsModalVisible] = useState(false);
	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<div className={'header'}>
			<Row type={'flex'} gutter={36} align={'middle'}>
				<Col>
					<Logo />
				</Col>
				<Col className={'_flex-grow'}>
					<Row type={'flex'} gutter={16} align={'middle'}>
						<Col className={'_flex-grow'}>
							<NavBar />
						</Col>
						<Col>
							<Button
								type={'link'}
								htmlType={'button'}
								icon={<LoginOutlined />}
								onClick={showModal}
							>
								Sign In
							</Button>
							<Modal
								title="Basic Modal"
								visible={isModalVisible}
								onOk={handleOk}
								onCancel={handleCancel}
							>
								<LoginForm />
							</Modal>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export { View };
