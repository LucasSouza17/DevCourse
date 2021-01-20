import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { DescriptionProps } from '.'

type WrapperProps = Omit<DescriptionProps, 'description'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};    
    `}
  `
}

export const Wrapper = styled.p<WrapperProps>`
  ${({ theme, color, size }) => css`
    font-weight: ${theme.font.light};
    color: ${theme.colors[color!]};

    strong {
      font-weight: ${theme.font.bold};
    }

    ${!!size && wrapperModifiers[size](theme)};
  `}
`
