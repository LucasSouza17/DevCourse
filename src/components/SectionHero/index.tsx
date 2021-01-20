import * as S from './styles'
import Container from '../Container/'
import Title from '../Title'
import Description from '../Description'
import Logo from '../Logo'

export type SectionHeroProps = {
  title: string
  description: string
  logoUrl: string
  alternativeTextLogo: string
  heroUrl: string
  alternativeTextHero: string
}

const SectionHero = ({
  title,
  description,
  logoUrl = '/img/logo.svg',
  alternativeTextLogo = 'DevCourse',
  heroUrl = '/img/hero.svg',
  alternativeTextHero = 'Computer Illustration'
}: SectionHeroProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Logo url={logoUrl} alternativeText={alternativeTextLogo} />

        <S.Content>
          <S.TextBlock>
            <Title color="white">{title}</Title>
            <Description description={description}></Description>
          </S.TextBlock>

          <S.Image src={heroUrl} alt={alternativeTextHero} />
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default SectionHero
