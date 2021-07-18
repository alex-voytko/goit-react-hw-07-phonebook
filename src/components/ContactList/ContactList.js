import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

const ContactList = ({ contacts, onRemove }) => {
    return (
        <>
            <ul className="contact-list">
                {contacts.map(({ id, name, number }) => (
                    <li key={id} id={id}>
                        <p className="text-name">{name}</p>
                        <p className="text-number">{number}</p>
                        <button
                            className="btn-delete"
                            onClick={() => onRemove(id)}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onRemove: PropTypes.func.isRequired,
};
const getSearchingContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
    );
};
const mapStateToProps = state => {
    const { filter, items } = state.contacts;
    return {
        contacts: getSearchingContacts(items, filter),
    };
};
const mapDispatchToProps = dispatch => ({
    onRemove: id => dispatch(contactsActions.removeContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
