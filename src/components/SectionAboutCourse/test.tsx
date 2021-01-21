import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SectionAboutCourse from '.'

describe('<SectionAboutCourse />', () => {
  it('should render the components', () => {
    renderWithTheme(
      <SectionAboutCourse
        buttonText="Buy now"
        discountPrice="R$ 299,90"
        price="R$ 699,90"
        subtitle="You liked it, do not miss the opportunity buy now!!"
        title="About Course"
        urlVideo="https://www.youtube.com/embed/tgbNymZ7vqY"
      />
    )

    expect(
      screen.getByRole('heading', { name: 'R$ 299,90' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'R$ 699,90' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /You liked it, do not miss the opportunity buy now!!/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /about course/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('iframe')).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/tgbNymZ7vqY'
    )

    expect(screen.getByRole('button', { name: /buy now/i })).toBeInTheDocument()
  })
})
