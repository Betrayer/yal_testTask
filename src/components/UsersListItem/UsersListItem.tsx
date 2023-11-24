import './index.scss';

import React, { FC } from 'react';

import { IUser } from '../../types/users';

interface IUsersListItemProps {
	item: IUser;
}

const UsersListItem: FC<IUsersListItemProps> = ({ item }) => {
	return (
		<li>
			<span>{item.name}</span>
		</li>
	);
};

export default UsersListItem;
