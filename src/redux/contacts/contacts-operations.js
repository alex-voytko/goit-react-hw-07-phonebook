import axios from 'axios';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3050';

const addContact = contact => dispatch => {
    dispatch({ type: addContactRequest });

    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
};
export default { addContact };
