import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add');
const removeContact = createAction('contacts/remove');
const changeFilter = createAction('contacts/changeFilter');

export default { addContact, removeContact, changeFilter };

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
