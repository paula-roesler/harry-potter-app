const charactersUrl = 'http://hp-api.herokuapp.com/api/characters'

export default function getCharacters() {
  return fetch(charactersUrl).then(res => res.json())
}
