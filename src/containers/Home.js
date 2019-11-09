// import React, { Component } from 'react';
// import { getSingleCharacter, searchCharacters } from '../components/services/rickAndMortyApi';
// import CharacterCard from '../components/CharacterCard/CharacterCard';
// import CharacterContainer from '../components/CharacterContainer/CharacterContainer';
// import Search from '../components/Search/Search';

// export default class CharacterDisplay extends Component {
//   state = {
//     character: {},
//     loading: true,
//     searchTerm: ''
//   }

//   fetchCharacter = () => {
//     this.setState({ loading: true });
//     getSingleCharacter()
//       .then((character) => this.setState({ character, loading: false }));
//   }

//   handleSubmit = event => {
//     event.preventDefault();
//     searchCharacters(searchTerm);
//   };

//   handleChange = ({ target }) => {
//     setSearchTerm(target.value);
//   };

//   render() {
//     return (
//       <>
//         <CharacterContainer >
//           <button onClick={this.fetchCharacter}>Rick and Morty Character!</button>
//           <CharacterCard name={this.state.name} image={this.state.character.image} />
//         </CharacterContainer >
//         <Search
//           handleSubmit={handleSubmit}
//           handleChange={handleChange} />
//       </>
//     );
//   }

// }
