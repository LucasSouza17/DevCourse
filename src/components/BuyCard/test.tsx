import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BuyCard from '.'

describe('<BuyCard />', () => {
  it('should render the prices', () => {
    renderWithTheme(
      <BuyCard
        buttonText="Buy now"
        price="R$ 699,90"
        discountPrice="R$ 299,90"
      />
    )

    expect(
      screen.getByRole('heading', { name: 'R$ 699,90' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'R$ 299,90' })
    ).toBeInTheDocument()
  })

  it('should render the text button', () => {
    renderWithTheme(
      <BuyCard
        buttonText="Buy now"
        price="R$ 699,90"
        discountPrice="R$ 299,90"
      />
    )

    expect(screen.getByRole('button', { name: /buy now/i })).toBeInTheDocument()
  })
})
