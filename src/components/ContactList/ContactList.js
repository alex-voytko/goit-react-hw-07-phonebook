import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';

class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
        onRemove: PropTypes.func.isRequired,
    };
    componentDidMount() {
        this.props.fetchContacts();
    }
    render() {
        const { onRemove, contacts } = this.props;
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
    }
}

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
    fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
    onRemove: id => dispatch(contactsOperations.removeContact(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ContactList);
