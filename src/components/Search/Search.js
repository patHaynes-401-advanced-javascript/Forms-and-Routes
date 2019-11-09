import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Search/Search.css';

export default function Search({ handleSubmit, handleChange, searchTerm }) {
  return (
    <>
      <div className={styles.Search}>
        <form onSubmit={handleSubmit}>
          <input value={searchTerm} type="text" name="characterSearch" placeholder="Character Name" onChange={handleChange}></input>
          <button>Search</button>
        </form>
      </div>
    </>
  );
}

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string
};
