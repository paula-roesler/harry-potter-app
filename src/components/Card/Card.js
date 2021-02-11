import './Card.css'
import createElement from '../../lib/createElement'

export default function Card(image, name, house, ancestry, patronus) {
  const characterName = createElement('h2', { className: 'names' }, name)
  const profilePicture = createElement('img', {
    className: 'profilePicture',
    src: image,
  })

  const characterDetails = createElement('div', {
    className: 'characterDetails',
    innerHTML: `
  <ul>  
    <li>
      House: ${house}
    </li>
    <li>
    Ancestry: ${ancestry}
    </li>
    <li>
    Patronus: ${patronus}
    </li>
  <ul>
  `,
  })

  const el = createElement(
    'section',
    { className: 'Card' },
    characterName,
    profilePicture,
    characterDetails
  )

  return el
}
