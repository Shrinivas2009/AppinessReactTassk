import React, { Component } from 'react';
import contacts from './../../data.json';
import './Dashboard.css';
class Dashboard extends Component {
	render() {
		return (
			<div>
				<ul>
					<h1>Employees Dashboard</h1>
					<li>ID</li>
					<li>NAME</li>
					<li>AGE</li>
					<li>Gender</li>
					<li>EMAIL</li>
					<li>Mobile</li>
				</ul>
				{contacts.map((el) => {
					return (
						<ul class="ListOfData" key={el.id}>
							<li>{el.id}</li>
							<li>{el.name}</li>
							<li>{el.age}</li>
							<li>{el.gender}</li>
							<li>{el.email}</li>
							<li>{el.phoneNo}</li>
						</ul>
					);
				})}
			</div>
		);
	}
}

export default Dashboard;
