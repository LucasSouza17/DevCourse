import * as S from './styles'

export type LineColors = 'primary' | 'terciary'

export type TitleProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineColor?: LineColors
  size?: 'small' | 'medium'
}

const Title = ({
  children,
  color = 'black',
  lineLeft = false,
  lineColor = 'primary',
  size = 'medium'
}: TitleProps) => {
  return (
    <S.Wrapper
      size={size}
      color={color}
      lineLeft={lineLeft}
      lineColor={lineColor}
    >
      {children}
    </S.Wrapper>
  )
}

export default Title
