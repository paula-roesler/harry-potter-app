import createElement from '../../lib/createElement'
import getCharacters from '../../services/getCharacters'
import AppHeader from '../AppHeader'
import Card from '../Card'
import HouseFilter from '../HouseFilter'
import './App.css'

export default function App() {
  const header = AppHeader('Harry Potter App')
  const houseFilter = HouseFilter(onFilterByHouse)
  const cardContainer = createElement('div')

  const app = createElement(
    'div',
    { className: 'App' },
    header,
    houseFilter,
    cardContainer
  )

  let characters

  getCharacters()
    .then(data => {
      createCards(data)
      characters = data
    })
    .catch(error => handleGetCharacterError(error))

  function onFilterByHouse(house) {
    console.log('App says: ', house)
    const filteredCharacters = characters.filter(
      character => house == null || character.house === house
    )

    createCards(filteredCharacters)
  }

  function createCards(characters) {
    const cards = characters.map(character => Card(character))
    cardContainer.innerHTML = ''
    cardContainer.append(...cards)
  }

  function handleGetCharacterError(error) {
    const errorMessage = createElement(
      'strong',
      { style: 'color: crimson;' },
      error.message
    )
    app.append(errorMessage)
  }

  return app
}
