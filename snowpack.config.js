// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    src: '/',
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2017',
  },
  plugins: [],
  packageOptions: {},
  devOptions: {},
  buildOptions: {},
}
