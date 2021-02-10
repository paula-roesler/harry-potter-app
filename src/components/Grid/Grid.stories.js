import Grid from './Grid'

export default {
  title: 'Grid',
  component: Grid,
}

const exampleChildren = [
  createElement('span', { style: 'background: skyblue' }, 'top'),
  createElement('span', { style: 'background: papayawhip' }, 'center'),
  createElement('span', { style: 'background: skyblue' }, 'bottom'),
]

export const base = () => Grid(...exampleChildren)
