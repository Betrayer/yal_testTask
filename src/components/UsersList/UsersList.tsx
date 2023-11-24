import './index.scss';

import React, { FC } from 'react';

import { IUser } from '../../types/users';
import UsersListItem from '../UsersListItem/UsersListItem';
import { users } from '../../users/users';

const UsersList: FC = () => {
	return (
		<div className='usersList'>
			<ul>
				{users.map((item: IUser) => (
					<UsersListItem key={item.id} item={item} />
				))}
			</ul>
		</div>
	);
};

export default UsersList;
