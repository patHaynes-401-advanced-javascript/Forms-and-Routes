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

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    return <Characters items={characters} />;
  }

}
