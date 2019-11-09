import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Characters from '../components/Characters/Characters';
import { searchCharacters } from '../components/services/rickAndMortyApi';
import CharacterContainer from '../components/CharacterContainer/CharacterContainer';
import { usePaging } from '../containers/Paging';

export default function ListPage({ match }) {

  const [character, setCharacter] = useState([]);
  const { page, handleBack, handleNext } = usePaging();

  useEffect(() => {
    searchCharacters(match.params.searchTerm, page)
      .then(fetchCharacters => {
        setCharacter(fetchCharacters.results);
      });
  }, [page]);


  return (
    <CharacterContainer>
      <Characters
        items={character}
        handleBack={handleBack}
        handleNext={handleNext} />
    </CharacterContainer>
  );

}

ListPage.propTypes = {
  match: PropTypes.object.isRequired
};
