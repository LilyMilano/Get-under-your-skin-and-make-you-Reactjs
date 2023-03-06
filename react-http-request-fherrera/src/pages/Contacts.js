import React from 'react';
import { contactApi } from '../api/contactApi';

const Contacts = () => {
	contactApi.get('https://reqres.in/api/users').then((resp) => {
		console.log(resp);
	});

	return (
		<div className="mt-5">
			<h1>Contacts</h1>
			<hr />

			<table className="table">
				<thead>
					<tr>
						<th>id</th>
						<th>name</th>
						<th>email</th>
						<th>phone</th>
						<th>message</th>
						<th>created_at</th>
						<th>updated_at</th>
						<th>deleted_at</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>id</td>
						<td>name</td>
						<td>email</td>
						<td>phone</td>
						<td>message</td>
						<td>created_at</td>
						<td>updated_at</td>
						<td>deleted_at</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Contacts;
