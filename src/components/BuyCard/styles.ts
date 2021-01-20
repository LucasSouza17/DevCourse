import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    max-width: 57.375rem;
    max-height: 21.875rem;
    width: 90vw;
    height: 100vh;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xsmall};

    box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.25);

    ${media.greaterThan('medium')`
      width: 100vw;
    `}
  `}
`

export const BoxPrices = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Price = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    text-decoration: line-through;
    font-size: ${theme.font.sizes.small};
    font-weight: 700;
    margin-top: 0.8rem;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const DiscountPrice = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: 700;

    ${media.greaterThan('medium')`
      font-size: 4rem;
    `}
  `}
`

export const Separator = styled.div`
  ${({ theme }) => css`
    width: 0.2rem;
    height: 4.5rem;
    border: 1px solid ${theme.colors.black};
    margin: 0 0.8rem;
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightBg};
    border: none;
    margin-top: ${theme.spacings.small};
    width: 17.375rem;
    height: 3.81rem;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
    box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.15);

    ${media.greaterThan('medium')`
      width: 23.375rem;
      height: 5.125rem;
    `}
  `}
`
