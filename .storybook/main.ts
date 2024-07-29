const config = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials', '@chromatic-com/storybook'],

  framework: {
    name: '@storybook/nextjs',
    options: {}
  },

  docs: {},

  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
}
export default config
