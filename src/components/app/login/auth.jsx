import React, { memo } from 'react';
import { LoginForm } from "./reduxForm";

const Auth = memo(() => {

	return (
		<div>
			<LoginForm />
		</div>
	);
});

export { Auth };
