import './index.scss';

import React, { FC } from 'react';

interface IWrapper {
	children: React.ReactNode;
}

const Wrapper: FC<IWrapper> = ({ children }) => {
	return <div className='wrapper'>{children}</div>;
};

export default Wrapper;
