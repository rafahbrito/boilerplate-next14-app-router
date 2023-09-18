import { Meta, StoryObj } from '@storybook/react'

import Main from '.'

export default {
  title: 'components/Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {}

export const Basic: StoryObj = {
  args: {
    title: 'Boilerplate NextJS',
    description:
      'Boilerplate desenvolvido para acelerar a criação de projetos com NextJS, Typescript, Jest, Styled-Components, Storybook e muito mais.'
  }
}
