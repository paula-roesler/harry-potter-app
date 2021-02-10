import AppHeader from './AppHeader'
import StaticHTML from './AppHeader.html'

export default {
  title: 'AppHeader',
  component: AppHeader,
}

export const HTML = () => StaticHTML
export const JS = () => AppHeader('JS Title')
