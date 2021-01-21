import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: ${theme.spacings.large};
  `}
`

export const SpaceContainer = styled.div`
  margin-top: 2.4rem;
`
