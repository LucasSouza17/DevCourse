import * as S from './styles'

export type LogoProps = {
  alternativeText: string
  url: string
}

const Logo = ({ alternativeText, url }: LogoProps) => {
  return <S.Wrapper src={url} alt={alternativeText} />
}

export default Logo
