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

// write a function that gets a random number
// get random number between however many characters there is
// return fetch API + random number with temp litteral
// .then(res => ([res.ok, res.json()]))
// .then(([ok, json]) => {
//   if(!ok) throw 'Unable to fetch characters';

//   return json;
