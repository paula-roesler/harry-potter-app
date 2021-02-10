export default function createElement(type, props, ...children) {
  const el = document.createElement(type)
  Object.assign(el, props) // alle oben angelegten props werden dem el übergeben, assigned bzw zugewiesen
  children && el.append(...children.map(child => child.el ?? child))
  return el
}
