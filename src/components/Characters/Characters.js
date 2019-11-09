import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import PropTypes from 'prop-types';

export default function Characters({ items, handleBack, handleNext }) {

  const cards = items.map(({ _id, name, image }) => {
    return (
      <>
        <CharacterCard key={_id} _id={_id} name={name} image={image} />
      </>
    );

  });


  return (
    <section>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
      <ul>
        {cards}
      </ul>
    </section>
  );

}

Characters.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string.isRequired,
  })),
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired
};
