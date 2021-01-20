import * as S from './styles'

export type ContainerProps = {
  id?: string
  children: React.ReactNode
}

const Container = ({ children, id }: ContainerProps) => {
  return <S.Container id={id}>{children}</S.Container>
}

export default Container
