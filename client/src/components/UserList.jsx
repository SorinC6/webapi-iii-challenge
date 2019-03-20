import React from 'react';
import Card from './UserCard';

const UserList = ({ users }) => {
	return (
		<div>
			{users.map((user) => {
				return <Card name={user.name} />;
			})}
		</div>
	);
};

export default UserList;
