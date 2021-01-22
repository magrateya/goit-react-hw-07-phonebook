import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => {
  return axios.get('/contacts').then(response => response.data);
};

export const addContact = contact => {
  return axios.post('/contacts', contact).then(({ data }) => data);
};

export const deleteContact = contactId => {
  return axios.delete(`/contacts${contactId}`);
};

export const updateContact = (contactId, update) => {
  return axios.update(`/contacts${contactId}`, update).then(({ data }) => data);
};

// export default {fetchContacts, addContact, deleteContact, updateContact}
