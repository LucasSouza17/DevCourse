import { Story, Meta } from '@storybook/react/types-6-0'

import BuyCard, { BuyCardProps } from '.'

export default {
  title: 'BuyCard',
  component: BuyCard,
  argTypes: {
    price: {
      type: 'string'
    },
    discountPrice: {
      type: 'string'
    },
    buttonText: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<BuyCardProps> = (args) => <BuyCard {...args} />

Default.args = {
  buttonText: 'Buy now',
  discountPrice: 'R$ 299,90 ',
  price: 'R$ 699,90'
}
