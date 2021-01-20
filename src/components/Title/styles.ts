import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { TitleProps, LineColors } from '.'

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `};
  `,

  lineLeft: (theme: DefaultTheme, LineColor: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.5rem solid ${theme.colors[LineColor]};
  `
}

export const Wrapper = styled.h1<TitleProps>`
  ${({ theme, color, lineLeft, lineColor, size }) => css`
    color: ${theme.colors[color!]};

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)};
    ${!!size && wrapperModifiers[size](theme)};
  `}
`
