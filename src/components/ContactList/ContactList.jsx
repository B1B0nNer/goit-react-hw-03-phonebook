import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contactsList, onDelete }) => {
  return (
    <ul>
      {contactsList.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name} || </span>
          <span> {number}</span>
          <button
            type="button"
            onClick={() => onDelete(id)}
            style={{ margin: 10 + 'px' }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;