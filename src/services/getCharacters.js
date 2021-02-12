const charactersUrl = 'https://hp-api.herokuapp.com/api/characters'

export default function getCharacters() {
  return fetch(charactersUrl).then(res => res.json())
}
