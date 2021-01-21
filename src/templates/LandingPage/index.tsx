import * as S from './styles'

import SectionHero, { SectionHeroProps } from '../../components/SectionHero'
import SectionAboutCourse, {
  SectionAboutCourseProps
} from '../../components/SectionAboutCourse'

export type LandingPageProps = {
  sectionHero: SectionHeroProps
  sectionAbout: SectionAboutCourseProps
}

const LandingPage = ({ sectionHero, sectionAbout }: LandingPageProps) => {
  return (
    <>
      <S.SectionHero>
        <SectionHero {...sectionHero} />
      </S.SectionHero>

      <S.SectionAbout>
        <SectionAboutCourse {...sectionAbout} />
      </S.SectionAbout>
    </>
  )
}

export default LandingPage
