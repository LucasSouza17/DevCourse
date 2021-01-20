import * as S from './styles'

export type LineColors = 'primary' | 'terciary'

export type TitleProps = {
  children: React.ReactNode
  color?: 'white' | 'black' | 'primary'
  lineLeft?: boolean
  lineColor?: LineColors
  size?: 'small' | 'medium'
  fontWeight?: 'bold' | 'regular'
}

const Title = ({
  children,
  color = 'black',
  lineLeft = false,
  lineColor = 'primary',
  size = 'medium',
  fontWeight = 'bold'
}: TitleProps) => {
  return (
    <S.Wrapper
      size={size}
      color={color}
      lineLeft={lineLeft}
      lineColor={lineColor}
      fontWeight={fontWeight}
    >
      {children}
    </S.Wrapper>
  )
}

export default Title
