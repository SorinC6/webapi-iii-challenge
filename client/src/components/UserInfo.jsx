import React from 'react';
import axios from 'axios';

class UserInfo extends React.Component {
	state = {
		userMesseges: [],
		currentUser: ''
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		// console.log(id);
		axios
			.get(`http://localhost:4000/api/users/${id}/posts`)
			.then((res) => {
				//console.log(res.data);
				this.setState({
					userMesseges: res.data,
					currentUser: res.data
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
        const current = this.state.currentUser[0];
        //debugger;
		console.log(current);
		return (
			<div>
				<p>User Info component</p>
				{this.state.userMesseges.map((message) => {
					return <p key={message.id}>{message.text}</p>;
				})}
			</div>
		);
	}
}

export default UserInfo;
