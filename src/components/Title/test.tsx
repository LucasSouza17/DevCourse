import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Title from '.'

describe('<Title />', () => {
  it('should render a black heading by default', () => {
    renderWithTheme(<Title>How it works?</Title>)

    expect(screen.getByRole('heading', { name: /how it works/i })).toHaveStyle({
      color: '#131313'
    })
  })

  it('should render a white heading when color is passed', () => {
    renderWithTheme(<Title color="white">How it works?</Title>)

    expect(screen.getByRole('heading', { name: /how it works/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a blue heading when color is passed', () => {
    renderWithTheme(<Title color="primary">How it works?</Title>)

    expect(screen.getByRole('heading', { name: /how it works/i })).toHaveStyle({
      color: '#0F6EC7'
    })
  })

  it('should render a black heading with a line to the left side', () => {
    renderWithTheme(<Title lineLeft>How it works?</Title>)

    expect(screen.getByRole('heading', { name: /how it works/i })).toHaveStyle({
      color: '#131313',
      'border-left': '0.5rem solid #0F6EC7'
    })
  })

  it('should render with a small size', () => {
    renderWithTheme(<Title size="small">How it works?</Title>)

    expect(screen.getByRole('heading', { name: /how it works/i })).toHaveStyle({
      'font-size': '1.6rem'
    })
  })

  it('should render with a medium size *not greaterThan Medium', () => {
    renderWithTheme(<Title size="medium">How it works?</Title>)

    expect(screen.getByRole('heading', { name: /how it works/i })).toHaveStyle({
      'font-size': '2.0rem'
    })
  })

  it('should render lineLeft border with a terciary color', () => {
    renderWithTheme(
      <Title lineLeft lineColor="terciary">
        How it works?
      </Title>
    )

    expect(screen.getByRole('heading', { name: /how it works/i })).toHaveStyle({
      'border-left': '0.5rem solid  #FFB7F8'
    })
  })

  it('should render fontweight bold by default', () => {
    renderWithTheme(<Title>How it works?</Title>)

    expect(screen.getByRole('heading', { name: /how it works/i })).toHaveStyle({
      'font-weight': 600
    })
  })

  it('should render fontweight regular when is passed', () => {
    renderWithTheme(<Title fontWeight="regular">How it works?</Title>)

    expect(screen.getByRole('heading', { name: /how it works/i })).toHaveStyle({
      'font-weight': 400
    })
  })
})
