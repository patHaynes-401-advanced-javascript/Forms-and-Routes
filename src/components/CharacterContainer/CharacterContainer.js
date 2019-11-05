import React from 'react';
import PropTypes from 'prop-types';

export default function CharacterContainer({ children }) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}

CharacterContainer.propTypes = {
  children: PropTypes.node.isRequired
};
