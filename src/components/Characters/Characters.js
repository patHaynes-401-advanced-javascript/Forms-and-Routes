import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import PropTypes from 'prop-types';

export default function Characters({ items }) {
  return (
    <>
      {items && items.map(({ _id, name, image }) => (
        <CharacterCard key={_id} _id={_id} name={name} image={image} />
      ))}
    </>
  );
}

Characters.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string.isRequired
  }))
};
