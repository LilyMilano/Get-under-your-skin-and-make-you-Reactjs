import React from 'react';
import { useContacts } from '../hooks/useContacts';

const Contacts = () => {
	const { contacts } = useContacts();

	return (
		<div className="mt-5">
			<h1>Contacts</h1>
			<hr />

			<table className="table">
				<thead>
					<tr>
						<th>Id</th>
						<th>Email</th>
						<th>Name</th>
						<th>Avatar</th>
					</tr>
				</thead>

				<tbody>
					{contacts.map((contact) => (
						<tr key={contact.email}>
							<td>{contact.id}</td>
							<td>{contact.email}</td>
							<td>
								{contact.first_name} {contact.last_name}
							</td>
							<td>
								<img
									src={contact.avatar}
									className="img-thumbnail"
									alt="contacts"
									style={{
										width: 80,
									}}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Contacts;
