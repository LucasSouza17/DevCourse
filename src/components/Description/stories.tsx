import { Story, Meta } from '@storybook/react/types-6-0'

import Description, { DescriptionProps } from '.'

export default {
  title: 'Description',
  component: Description,
  argTypes: {
    description: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<DescriptionProps> = (args) => (
  <Description {...args} />
)

Default.args = {
  description:
    '<p>Have you thought about <strong>improving</strong> your skills in the <strong>hottest</strong> technologies on the market lately?<br /> <strong>Join us</strong> and start your first 4 <strong>free lessons</strong></p>'
}
