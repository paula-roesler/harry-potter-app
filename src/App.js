import AppHeader from './components/AppHeader'
import getCharacters from './services/getCharacters'

export default function App() {
  const header = AppHeader('Harry Potter App')
  document.body.append('header')
}

// fetch API
getCharacters()
  .then(data => console.log(data))
  .chatch(error => console.log(error))
