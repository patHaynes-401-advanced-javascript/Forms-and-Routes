import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.css';

export default function CharacterContainer({ children }) {
  return (
    <>
      <section className={styles.Container}>{children}</section>
    </>
  );
}

CharacterContainer.propTypes = {
  children: PropTypes.node.isRequired
};
