import React from 'react';
import styled from 'styled-components';

const UserCard = ({ name, id }) => {
	return (
		<Card>
			<p>{name}</p>
		</Card>
	);
};

export default UserCard;

const Card = styled.div`
	width: 200px;
	height: 100px;
	text-align: center;
	border: 1px solid black;
	margin: 20px;
	cursor: pointer;
`;
