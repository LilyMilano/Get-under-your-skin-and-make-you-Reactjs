import { useState, useEffect } from 'react';
import { contactApi } from '../api/contactApi';

export const useContacts = () => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		getContacts();
	}, []);

	const getContacts = async () => {
		const resp = await contactApi.get('https://reqres.in/api/users');
		setContacts(resp.data.data);
	};

	return {
		contacts,
	};
};
