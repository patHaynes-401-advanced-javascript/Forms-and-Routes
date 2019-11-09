import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Characters from '../components/Characters/Characters';
import { searchCharacters } from '../components/services/rickAndMortyApi';
import CharacterContainer from '../components/CharacterContainer/CharacterContainer';

export default function ListPage({ match }) {

  const [character, setCharacter] = useState([]);


  useEffect(() => {
    searchCharacters(match.params.searchTerm)
      .then(fetchCharacters => {
        setCharacter(fetchCharacters.results);
      });
  }, []);


  return (
    <CharacterContainer>
      <Characters items={character} />
    </CharacterContainer>
  );

}

ListPage.propTypes = {
  match: PropTypes.object.isRequired
};
