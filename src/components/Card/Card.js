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
    profilePicture,
    characterName,
    characterDetails
  )

  function houseColors(house) {
    let houseColor

    if (house === 'Gryffindor') {
      houseColor = el.style.background = '#cf1e2e'
    }
    if (house === 'Ravenclaw') {
      el.style.backgroundColor = '#4b90cb'
    }
    if (house === 'Hufflepuff') {
      el.style.backgroundColor = '#ffcf47'
    }
    if (house === 'Slytherin') {
      el.style.backgroundColor = '#016241'
    }
    if (house === '') {
      el.style.backgroundColor = 'grey'
    }
    return houseColor
  }

  houseColors(house)

  return el
}
