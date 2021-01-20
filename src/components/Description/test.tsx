import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Description from '.'

describe('<Description />', () => {
  it('should render a description', () => {
    renderWithTheme(<Description description="Lucas Souza" />)

    expect(screen.getByText(/lucas souza/i)).toBeInTheDocument()
  })

  it('should render a description with small size', () => {
    renderWithTheme(<Description size="small" description="Lucas Souza" />)

    expect(screen.getByText(/lucas souza/i)).toHaveStyle({
      'font-size': '1.2rem'
    })
  })
})
