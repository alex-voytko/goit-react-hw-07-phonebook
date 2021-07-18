import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';
import initialContacts from '../../contacts.json';

const items = createReducer([...initialContacts], {
    [actions.addContact]: (state, action) => {
        const nameExistCheck = state.find(
            contact => contact.name === action.payload.name,
        );
        return !nameExistCheck
            ? [...state, action.payload]
            : alert('This name has already exists, try another one!');
    },

    [actions.removeContact]: (state, action) =>
        state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer('', {
    [actions.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
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
