import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.iframe`
  border: none;
  border-radius: 0.5rem;
  max-width: 890px;
  max-height: 416px;
  width: 93vw;
  height: 100vh;

  ${media.greaterThan('medium')`
    width: 94vw;
  `}
`
