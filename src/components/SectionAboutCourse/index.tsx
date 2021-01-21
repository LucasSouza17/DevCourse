import * as S from './styles'
import Container from '../Container/'
import Title from '../Title'
import Video from '../Video'
import BuyCard from '../BuyCard'

export type SectionAboutCourseProps = {
  title: string
  urlVideo: string
  subtitle: string
  price: string
  discountPrice: string
  buttonText: string
}

const SectionAboutCourse = ({
  title,
  urlVideo,
  subtitle,
  price,
  discountPrice,
  buttonText
}: SectionAboutCourseProps) => {
  return (
    <Container>
      <Title lineLeft lineColor="primary">
        {title}
      </Title>

      <S.Container>
        <Video urlVideo={urlVideo} />

        <S.SpaceContainer>
          <Title color="primary">{subtitle}</Title>
        </S.SpaceContainer>

        <S.SpaceContainer>
          <BuyCard
            discountPrice={discountPrice}
            price={price}
            buttonText={buttonText}
          />
        </S.SpaceContainer>
      </S.Container>
    </Container>
  )
}

export default SectionAboutCourse
