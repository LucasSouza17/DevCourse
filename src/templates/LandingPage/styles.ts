import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightBg};
  `}
`

export const SectionHero = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
    clip-path: polygon(0 0, 100% 0%, 100% 90%, 0 100%);
  `}
`

export const SectionAbout = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightBg};
  `}
`
