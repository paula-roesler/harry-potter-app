import './Card.css'
import createElement from '../../lib/createElement'

export default function Card(image, name, house, ancestry, patronus) {
  const characterName = createElement('h3', { className: 'names' }, name)
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
        'linear-gradient(to top, #c99c06 0%, #eebc1b 100%)'
    }
    if (house === 'Slytherin') {
      el.style.backgroundImage =
        'linear-gradient(to top, #228a04 0%, #299e08 100%)'
    }
    if (house === '') {
      el.style.backgroundColor = 'grey'
    }
    return houseColor
  }

  return el
}
