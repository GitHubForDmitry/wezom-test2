import React, { memo } from 'react';
import ReduxForm from "./reduxForm";

const Auth = memo(() => {

	const submit = (values) => {
		window.alert(JSON.stringify(values))
	};

	return (
		<div>
			<ReduxForm onSubmit={submit} />
		</div>
	);
});

export { Auth };
