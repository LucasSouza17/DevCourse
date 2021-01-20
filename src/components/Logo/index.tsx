import * as S from './styles'

export type LogoProps = {
  alternativeText: string
  url: string
}

const Logo = ({
  alternativeText = 'DevCourse',
  url = '/img/logo.svg'
}: LogoProps) => {
  return <S.Wrapper src={url} alt={alternativeText} />
}

export default Logo
