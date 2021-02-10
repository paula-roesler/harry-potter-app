import './Card.css'
import createElement from '../../lib/createElement'

export default function Card(name) {
  return createElement('section', { className: 'Card' }, name)
}
