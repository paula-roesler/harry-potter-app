import createElement from '../../lib/createElement'
import './Grid.css'

export default function Grid(...children) {
  return createElement(
    'div',
    {
      className: 'Grid',
    },
    ...children
  )
}
