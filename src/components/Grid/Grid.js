import createElement from '../../lib/createElement'
import './Grid.css'

export default function Grid(...children) {
  return createElement('div', { className: 'Grid' }, ...children)
}

// einfach: Grid bekommt (...children) reingereicht
// das sind irgendwelche html elemente die erzeugt werden
// die werden dann an unsere createElement Funktion übergeben
