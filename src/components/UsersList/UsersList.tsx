import './index.scss';

import React, { FC } from 'react';

import { IUser } from '../../types/users';
import UserCard from '../UserCard/UserCard';
import { useMedia } from 'react-use';
import { users } from '../../users/users';

const UsersList: FC = () => {
	const isPortrait = useMedia('(orientation: portrait)');

	return (
		<ul className='usersList'>
			{users.map((item: IUser) => (
				<UserCard key={item.id} item={item} isPortrait={isPortrait} />
			))}
		</ul>
	);
};

export default UsersList;
