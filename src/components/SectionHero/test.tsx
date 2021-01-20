import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SectionHero from '.'

describe('<SectionHero />', () => {
  it('should render the heading and the description', () => {
    renderWithTheme(
      <SectionHero
        logoUrl="/img/logo.svg"
        alternativeTextLogo="devcourse"
        heroUrl="/img/hero.svg"
        alternativeTextHero="Computer Illustration"
        title="Hi Lucas"
        description="I'm Lucas"
      />
    )

    expect(
      screen.getByRole('heading', { name: /Hi Lucas/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/I'm Lucas/i)).toBeInTheDocument()
  })

  it('should render the image hero', () => {
    renderWithTheme(
      <SectionHero
        alternativeTextLogo="devcourse"
        logoUrl="/img/logo.svg"
        heroUrl="/img/hero.svg"
        alternativeTextHero="Computer Illustration"
        title="Hi Lucas"
        description="I'm Lucas"
      />
    )

    expect(
      screen.getByRole('img', { name: /Computer Illustration/i })
    ).toHaveAttribute('src', '/img/hero.svg')

    expect(screen.getByAltText(/Computer Illustration/i)).toBeInTheDocument()
  })

  it('should render the logo image', () => {
    renderWithTheme(
      <SectionHero
        alternativeTextLogo="devcourse"
        logoUrl="/img/logo.svg"
        heroUrl="/img/hero.svg"
        alternativeTextHero="Computer Illustration"
        title="Hi Lucas"
        description="I'm Lucas"
      />
    )

    expect(screen.getByRole('img', { name: /devcourse/i })).toHaveAttribute(
      'src',
      '/img/logo.svg'
    )

    expect(screen.getByAltText(/devcourse/i)).toBeInTheDocument()
  })
})
