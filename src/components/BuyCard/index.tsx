import * as S from './styles'

export type BuyCardProps = {
  price: string
  discountPrice: string
  buttonText: string
}

const BuyCard = ({ price, discountPrice, buttonText }: BuyCardProps) => {
  return (
    <S.Wrapper>
      <S.BoxPrices>
        <S.Price>{price}</S.Price>
        <S.Separator />
        <S.DiscountPrice>{discountPrice}</S.DiscountPrice>
      </S.BoxPrices>

      <S.Button>{buttonText}</S.Button>
    </S.Wrapper>
  )
}

export default BuyCard
