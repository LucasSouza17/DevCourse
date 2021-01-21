import { Story, Meta } from '@storybook/react/types-6-0'

import SectionAboutCourse, { SectionAboutCourseProps } from '.'

export default {
  title: 'SectionAboutCourse',
  component: SectionAboutCourse,
  argTypes: {
    title: {
      type: 'string'
    },
    urlVideo: {
      type: 'string'
    },
    subtitle: {
      type: 'string'
    },
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

export const Default: Story<SectionAboutCourseProps> = (args) => (
  <SectionAboutCourse {...args} />
)

Default.args = {
  buttonText: 'Buy now',
  discountPrice: 'R$ 299,90',
  price: 'R$ 699,90',
  subtitle: 'You liked it, do not miss the opportunity buy now!!',
  title: 'About Course',
  urlVideo: 'https://www.youtube.com/embed/tgbNymZ7vqY'
}
