import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const removeContact = createAction('contacts/remove');
export const changeFilter = createAction('contacts/changeFilter');

// const addContact = ({ name, number, id }) => ({
//     type: types.ADD,
//     payload: { name, number, id },
// });
// const removeContact = contactId => ({
//     type: types.REMOVE,
//     payload: contactId,
// });
// const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// });
