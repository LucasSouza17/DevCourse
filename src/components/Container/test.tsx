import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Container from '.'

describe('<Container />', () => {
  it('should render the container childrens', () => {
    renderWithTheme(
      <Container>
        <h1>Lucas Souza</h1>
      </Container>
    )

    expect(
      screen.getByRole('heading', { name: /lucas souza/i })
    ).toBeInTheDocument()
  })
})
