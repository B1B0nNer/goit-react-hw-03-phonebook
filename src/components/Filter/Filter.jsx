import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onFilterChange }) => {
  return (
    <>
      <h2>Find contact by name</h2>
      <label htmlFor="filter">
        <input
          type="text"
          name="filter"
          value={value}
          onChange={e => onFilterChange(e.target.value)}
        />
      </label>
    </>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;