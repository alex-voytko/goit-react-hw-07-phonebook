import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    removeContact,
    changeFilter,
} from './contacts-actions';
import initialContacts from '../../contacts.json';

const items = createReducer([...initialContacts], {
    [addContactSuccess]: (state, action) => {
        const nameExistCheck = state.find(
            contact => contact.name === action.payload.name,
        );
        return !nameExistCheck
            ? [...state, action.payload]
            : alert('This name has already exists, try another one!');
    },

    [removeContact]: (state, action) =>
        state.filter(contact => contact.id !== action.payload),
});

const loading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
});

const filter = createReducer('', {
    [changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
    loading,
});

// const items = (state = [], { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload];

//         case types.REMOVE:
//             return state.filter(contact => contact.id !== payload);

//         default:
//             return state;
//     }
// };
// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case types.CHANGE_FILTER:
//             return payload;

//         default:
//             return state;
//     }
// };
