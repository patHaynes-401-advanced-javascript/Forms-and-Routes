import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import PropTypes from 'prop-types';
import CharacterContainer from '../CharacterContainer/CharacterContainer';

export default function Characters({ items }) {
  return (
    <>
      <CharacterContainer>
        {items && items.map(({ _id, name, image }) => (
          <CharacterCard key={_id} _id={_id} name={name} image={image} />
        ))}
      </CharacterContainer>
    </>
  );
}

Characters.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    image: PropTypes.string.isRequired
  }))
};
