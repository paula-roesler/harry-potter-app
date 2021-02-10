export default function createElement(type, props, ...children) {
  const el = document.createElement(type)
  Object.assign(el, props)
  children && el.append(...children.map(child => child.el ?? child))
  return el
}
