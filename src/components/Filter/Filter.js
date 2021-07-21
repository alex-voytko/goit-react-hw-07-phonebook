import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';

const Filter = ({ value, onChange }) => (
    <>
        <label htmlFor="filter" className="label search">
            Search Contact
        </label>
        <input
            value={value}
            name="filter"
            onChange={onChange}
            className="input"
        />
    </>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    value: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
    onChange: e =>
        dispatch(contactsActions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
