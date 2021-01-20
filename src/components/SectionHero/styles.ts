import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  text-align: center;
  ${media.greaterThan('medium')`
    text-align: left;
    margin: auto;
  `}
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: 'center';
    justify-content: 'space-between';
  `}
`

export const TextBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    p {
      margin-top: 0.5rem;
    }

    ${media.greaterThan('medium')`
      margin: auto;
      padding-right: ${theme.spacings.small};
    `}
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} auto;
    width: min(20rem, 100%);

    ${media.greaterThan('medium')`
      margin-left: 5rem;
      width: 42rem;
    `}
  `}
`
