import React from 'react';
import { useContacts } from '../hooks/useContacts';
import ContactRow from '../components/ContactRow';


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
					
					{
						contacts.map(contact =>(
							<ContactRow
								key={contact.email}
								contact={contact}
							/>
						))
					}
				
				</tbody>
			</table>
		</div>
	);
};

export default Contacts;
