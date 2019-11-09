import React, { useState } from 'react';
import { getSingleCharacter } from '../components/services/rickAndMortyApi';
import PropTypes from 'prop-types';
import CharacterCard from '../components/CharacterCard/CharacterCard';
import CharacterContainer from '../components/CharacterContainer/CharacterContainer';
import Search from '../components/Search/Search';

export default function Home(props) {

  const [character, setCharacter] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    props.history.push(`/characters/${searchTerm}`);
  };

  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
    console.log(target.value);
  };

  const fetchCharacter = () => {
    getSingleCharacter()
      .then((character) => setCharacter(character));
  };

  return (
    <>
      <CharacterContainer >
        <button onClick={fetchCharacter}>Rick and Morty Character!</button>
        <CharacterCard name={name} image={character.image} />
      </CharacterContainer >
      <Search
        setSearchTerm={searchTerm}
        handleSubmit={handleSubmit}
        handleChange={handleChange} />
    </>
  );

}

Home.propTypes = {
  history: PropTypes.object
}
;
