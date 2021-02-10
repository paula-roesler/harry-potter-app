import './AppHeader.css'

export default function AppHeader(title) {
  const el = document.createElement('header')
  el.className = 'AppHeader'
  el.innerHTML = `<h1>${title}</h1>`
  return el
}
