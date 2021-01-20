import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Logo alternativeText="devcourse" url="/img/logo.svg" />)

    expect(screen.getByRole('img', { name: /devcourse/i })).toHaveAttribute(
      'src',
      '/img/logo.svg'
    )
  })
})
