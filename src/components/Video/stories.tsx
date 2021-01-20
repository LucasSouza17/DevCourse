import { Story, Meta } from '@storybook/react/types-6-0'

import Video, { VideoProps } from '.'

export default {
  title: 'Video',
  component: Video,
  argTypes: {
    urlVideo: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<VideoProps> = (args) => <Video {...args} />

Default.args = {
  urlVideo: 'https://www.youtube.com/embed/tgbNymZ7vqY'
}
