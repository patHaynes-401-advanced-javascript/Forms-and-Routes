import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import PropTypes from 'prop-types';
import CharacterContainer from '../CharacterContainer/CharacterContainer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Characters({ items }) {
  console.log(items);
  return (
    <>
      <Header />
      <CharacterContainer>
        {items && items.map(({ _id, name, image }) => (
          <CharacterCard key={_id} _id={_id} name={name} image={image} />
        ))}
      </CharacterContainer>
      <Footer />
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
