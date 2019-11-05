import React, { Component } from 'react';
import Characters from '../components/Characters/Characters';
import { getCharacters } from '../components/services/rickAndMortyApi';

export default class CharacterDisplay extends Component {
  state = {
    characters: [],
    loading: true
  }

  fetchCharacters = () => {
    this.setState({ loading: true });
    getCharacters()
      .then((characters) => this.setState({ characters, loading: false }));
  }

  render() {
    return (
      <>
        <button onClick={this.fetchCharacters}>Rick and Morty Character!
        </button>
        <Characters items={this.state.characters} />
      </>
    );
  }

}
