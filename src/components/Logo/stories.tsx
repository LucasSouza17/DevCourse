import { Story, Meta } from '@storybook/react/types-6-0'

import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    alternativeText: {
      type: 'string'
    },
    url: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />

Default.args = {
  alternativeText: 'DevCourse',
  url: '/img/logo.svg'
}
