import React, { FC } from 'react';

import UsersList from './components/UsersList/UsersList';
import Wrapper from './components/Wrapper/Wrapper';

const App: FC = () => {
	return (
		<Wrapper>
			<UsersList />
		</Wrapper>
		// <div className='app'>
		// 	<UsersList />
		// </div>
	);
};

export default App;
