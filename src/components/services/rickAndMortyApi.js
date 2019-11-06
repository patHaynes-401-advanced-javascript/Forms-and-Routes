export const getCharacters = (page = 1) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch characters';

      return json;
    })
    .then(({ results }) => results.map(character => ({
      name: character.name,
      species: character.species,
      status: character.status,
      image: character.image
    })
    ));
};

// export const randomCharacter = Math.floor(Math.random() * 6) + 1;

// export const getSingleCharacter = () => {
//   return fetch('https://rickandmortyapi.com/api/character/2')
//     .then(res => ([res.ok, res.json()]))
//     .then(([ok, json]) => {
//       if(!ok) throw 'Unable to fetch characters';
//       return json;
//     });
// };


