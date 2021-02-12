import './Card.css'
import createElement from '../../lib/createElement'

export default function Card({ image, name, house, ancestry, patronus }) {
  const characterName = createElement('h3', { className: 'Card__name' }, name)
  const profilePicture = createElement('img', {
    className: 'Card__profilePicture',
    src: image,
  })

  const characterDetails = createElement('ul', {
    className: 'Card__characterList',
    innerHTML: `
    <li>
      House: ${house}
    </li>
    <li>
    Ancestry: ${ancestry}
    </li>
    <li>
    Patronus: ${patronus}
    </li>
  `,
  })

  const el = createElement(
    'section',
    { className: 'Card' },
    profilePicture,
    characterName,
    characterDetails
  )

  houseColors(house)
  function houseColors(house) {
    let houseColor

    if (house === 'Gryffindor') {
      houseColor = el.style.backgroundImage =
        'linear-gradient(to top, #9d2413 0%, #e2422b 100%)'
    }
    if (house === 'Ravenclaw') {
      el.style.backgroundImage =
        'linear-gradient(to top, #2569ec 0%, #25baec 100%)'
    }
    if (house === 'Hufflepuff') {
      el.style.backgroundImage =
        'linear-gradient(to top, #e6a102 0%, #fcd02c 100%)'
    }
    if (house === 'Slytherin') {
      el.style.backgroundImage =
        'linear-gradient(to top, #076513 0%, #299e08 100%)'
    }
    if (house === '') {
      el.style.backgroundColor = 'grey'
    }
    return houseColor
  }

  return el
}
