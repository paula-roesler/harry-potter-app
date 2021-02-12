import './HouseFilter.css'
import createElement from '../../lib/createElement'
import Button from '../Button'

export default function HouseFilter(onFilterByHouses) {
  const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']

  let currentFilter

  const buttons = houses.map(house => {
    const button = Button(house, () => {
      currentFilter = currentFilter === house ? null : house
      onFilterByHouses(currentFilter)
      buttons.forEach(button => button.toggle(button.text === currentFilter))
    })
    return button
  })
  return createElement('section', { className: 'HouseFilter' }, ...buttons)
}
