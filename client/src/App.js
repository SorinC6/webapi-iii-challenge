import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import UserList from './components/UserList';

class App extends Component {
	state = {
		users: []
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

	render() {
		return (
			<div className="App">
				<h1>Lambda Day 3 challenge</h1>
				<UserList users={this.state.users} />
			</div>
		);
	}
}

export default App;
