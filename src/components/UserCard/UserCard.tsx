import './index.scss';

import React, { FC } from 'react';

import Divider from '../Divider/Divider';
import { IUser } from '../../types/users';

interface IUserCardProps {
	item: IUser;
	isPortrait: boolean;
}

const UserCard: FC<IUserCardProps> = ({ item, isPortrait }) => {
	return (
		<>
			<li className='userCard'>
				<div className='userCard__avatar'>
					<img
						className='userCard__avatar--image'
						src={item.avatar}
						alt={item.avatar}
					/>
					<div>
						<span className='userCard__avatar--name'>
							{item.name}
						</span>
						<span className='userCard__avatar--email'>
							{item.email}
						</span>
					</div>
				</div>
				{isPortrait && <Divider />}
				<div className='userCard__info'>
					<div>
						<span className='userCard__info--birthDate'>
							{item.birthDate}
							<span>Birth date</span>
						</span>
						<span className='userCard__info--address'>
							{item.address}
							<span>Address</span>
						</span>
					</div>
					<div>
						<span className='userCard__info--password'>
							{item.password}
							<span>Password</span>
						</span>
						<span className='userCard__info--phoneNumber'>
							{item.phoneNumber}
							<span>Phone number</span>
						</span>
					</div>
				</div>
			</li>
			{!isPortrait && <Divider />}
		</>
	);
};

export default UserCard;
