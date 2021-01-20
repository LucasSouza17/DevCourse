import * as S from './styles'

export type VideoProps = {
  urlVideo: string
}

const Video = ({ urlVideo }: VideoProps) => {
  return <S.Wrapper role="iframe" src={urlVideo} />
}

export default Video
