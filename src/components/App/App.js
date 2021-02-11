import './App.css'
import AppHeader from '../AppHeader'
import Button from '../Button'
import Card from '../Card'
import createElement from '../../lib/createElement'
import getCharacters from '../../services/getCharacters'

export default function App() {
  const header = AppHeader('Harry Potter App')
  const el = createElement('div', { className: 'App' }, header)

  // fetch API
  getCharacters()
    .then(characters => createCards(characters))
    .catch(error => handleGetCharacterError(error))

  function createCards(characters) {
    const cards = characters.map(({ image, name, house, ancestry, patronus }) =>
      Card()
    )
    document.body.append(...cards)
  }

  function handleGetCharacterError(error) {
    const errorMessage = createElement(
      'strong',
      { style: 'color: crimson;' },
      error.message
    )
    document.body.append(errorMessage)
  }

  document.body.append(Button)

  return el
}
