import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import UserList from './components/UserList';
import { Route } from 'react-router-dom';
import UserInfo from './components/UserInfo';

class App extends Component {
	state = {
		users: [],
		userMesseges: []
	};

	componentDidMount() {
		axios
			.get('http://localhost:4000/api/users')
			.then((res) => {
				//console.log(res);
				this.setState({
					users: res.data
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	getUserMessage = (id) => {
		//http://localhost:4000/api/users/4/posts   endpoint for getting all the posts for a specific user

		axios
			.get(`http://localhost:4000/api/users/${id}/posts`)
			.then((res) => {
				console.log(res.data);
				this.setState({
					userMesseges: res.data
				});
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div className="App">
				<h1>Lambda Day 3 challenge</h1>
				<div>
					<Route exact path="/" render={(props) => <UserList {...props} users={this.state.users} />} />
					<Route
						path="/users/:id"
						render={(props) => (
							<UserInfo
								{...props}
                
							/>
						)}
					/>
				</div>
			</div>
		);
	}
}

export default App;
