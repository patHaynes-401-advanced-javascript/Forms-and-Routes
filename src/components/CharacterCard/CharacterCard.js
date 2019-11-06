import React from 'react';
import PropTypes from 'prop-types';

export default function CharacterCard({ name, image }) {
  return (
    <div>
      <header><h3>{name || null}</h3></header>
      <figure>
        <img src={image} alt={name} />
      </figure>
    </div>
  );
}

CharacterCard.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string.isRequired,
};
