import * as S from './styles'

export type DescriptionProps = {
  description: string
  color?: 'white' | 'black'
  size?: 'small' | 'medium'
}

const Description = ({
  description,
  color = 'white',
  size = 'medium'
}: DescriptionProps) => {
  return (
    <S.Wrapper
      color={color}
      size={size}
      dangerouslySetInnerHTML={{ __html: description }}
    />
  )
}

export default Description
