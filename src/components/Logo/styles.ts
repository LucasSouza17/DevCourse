import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.img`
  width: 16rem;
  ${media.greaterThan('medium')`
    width: 18rem;
  `}
`
