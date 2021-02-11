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
      houseColor = el.style.background = '#cf2f0f'
    }
    if (house === 'Ravenclaw') {
      el.style.backgroundColor = '#0b8ced'
    }
    if (house === 'Hufflepuff') {
      el.style.backgroundColor = '#edb30b'
    }
    if (house === 'Slytherin') {
      el.style.backgroundColor = '#28861f'
    }
    if (house === '') {
      el.style.backgroundColor = 'grey'
    }
    return houseColor
  }

  return el
}
