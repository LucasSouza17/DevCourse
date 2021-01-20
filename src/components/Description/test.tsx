import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Description from '.'

describe('<Description />', () => {
  it('should render a description', () => {
    renderWithTheme(<Description description="Lucas Souza" />)

    expect(screen.getByText(/lucas souza/i)).toBeInTheDocument()
  })

  it('should render a description with medium size by default', () => {
    renderWithTheme(<Description description="Lucas Souza" />)

    expect(screen.getByText(/lucas souza/i)).toHaveStyle({
      'font-size': '1.6rem'
    })
  })

  it('should render a description with small size', () => {
    renderWithTheme(<Description size="small" description="Lucas Souza" />)

    expect(screen.getByText(/lucas souza/i)).toHaveStyle({
      'font-size': '1.2rem'
    })
  })

  it('should render a description with a default color', () => {
    renderWithTheme(<Description description="Lucas Souza" />)

    expect(screen.getByText(/lucas souza/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a description black color', () => {
    renderWithTheme(<Description color="black" description="Lucas Souza" />)

    expect(screen.getByText(/lucas souza/i)).toHaveStyle({
      color: '#232323'
    })
  })
})
