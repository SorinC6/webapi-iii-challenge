import React from 'react';
import Card from './UserCard';
import { Link } from 'react-router-dom';

const UserList = ({ users }) => {
	return (
		<div>
			{users.map((user) => {
				return (
					<Link key={user.id} to={`/users/${user.id}`}>
						<Card name={user.name} id={user.id} />;
					</Link>
				);
			})}
		</div>
	);
};

export default UserList;
