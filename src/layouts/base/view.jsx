import './style.scss';
import React, { useMemo } from 'react';
import { Layout } from 'antd';
import { APP_NAME } from 'constants/env';
import { Header } from 'components';
import { style } from './style';
import { Provider } from 'react-redux';
import { createRootReducer } from "../../store/root-reducer";
import { createStore } from "redux";
import { history } from "../../routes/history";

const store = createStore(createRootReducer(history));

const View = React.memo((props) => {
	const { children } = props;

	const currentYear = useMemo(() => new Date().getFullYear(), []);

	return (
		<Provider store={store}>
			<Layout className={'layout layout--base'}>
				<Layout.Header className={'layout__header'}><Header/></Layout.Header>
				<Layout.Content className={'layout__content'} style={style.content}>{children}</Layout.Content>
				<Layout.Footer className={'layout__footer'}>{currentYear} &copy; {APP_NAME}</Layout.Footer>
			</Layout>
		</Provider>
	);
});

export { View };
