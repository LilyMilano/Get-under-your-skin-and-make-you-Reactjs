import React from 'react';

const ContactRow = ({contact}) => {
	return (
		<tr>
			<td>{contact.id}</td>
			<td>{contact.email}</td>
			<td>
				{contact.first_name} {contact.last_name}
			</td>
			<td>
				<img
					src={contact.avatar}
					className="img-thumbnail"
					alt={contact.last_name}
					style={{
						width: 80,
					}}
				/>
			</td>
		</tr>
	);
};

export default ContactRow;
