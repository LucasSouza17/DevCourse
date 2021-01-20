import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Video from '.'

describe('<Video />', () => {
  it('should render the youtube video', () => {
    renderWithTheme(
      <Video urlVideo="https://www.youtube.com/embed/tgbNymZ7vqY" />
    )

    expect(screen.getByRole('iframe')).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/tgbNymZ7vqY'
    )
  })
})
