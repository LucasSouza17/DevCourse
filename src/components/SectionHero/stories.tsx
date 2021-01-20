import { Story, Meta } from '@storybook/react/types-6-0'

import SectionHero, { SectionHeroProps } from '.'

export default {
  title: 'SectionHero',
  component: SectionHero,
  argTypes: {
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<SectionHeroProps> = (args) => (
  <SectionHero {...args} />
)

Default.args = {
  title: 'Welcome to the world of programming',
  description:
    "<p>Have you thought about <strong>improving</strong> your skills in the <strong>hottest</strong> technologies on the market lately? <strong>Join us</strong> and start your first 4 <strong>free lessons.</strong> It's <strong>very easy</strong>, watch the <strong>video</strong> below, see what you think and below you can <strong>click</strong> the button and make the <strong>payment</strong> </p>"
}
