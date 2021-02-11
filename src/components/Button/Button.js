import createElement from '../../lib/createElement'
import './Button.css'

export default function () {
  const buttonG = createElement('button', {
    className: 'buttonG',
    innerText: 'G',
  })

  const buttonH = createElement('button', {
    className: 'buttonH',
    innerText: 'H',
  })

  const buttonR = createElement('button', {
    className: 'buttonR',
    innerText: 'R',
  })

  const buttonS = createElement('button', {
    className: 'buttonS',
    innerText: 'S',
  })

  return { buttonG, buttonH, buttonR, buttonS }
}
