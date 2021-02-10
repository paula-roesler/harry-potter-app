import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import '../src/styles/global.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
}
