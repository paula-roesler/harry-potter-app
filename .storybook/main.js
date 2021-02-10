const path = require('path')

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-design-assets',
    {
      name: '@storybook/addon-essentials',
      options: {
        controls: false,
        actions: true,
        docs: false,
      },
    },
  ]
}
