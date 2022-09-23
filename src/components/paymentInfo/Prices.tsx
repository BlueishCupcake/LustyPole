import { pricesInfo } from "helpers/paymentInfo/prices";

import * as S from "./style";

export const Prices: React.FC = () => {
  return (
    <>
      <S.PricesBody>
        <S.CustomTitle>Valores Mensais</S.CustomTitle>

        {pricesInfo.map((priceInfo) => {
          return (
            <S.PriceInfoWrapper key={priceInfo.id}>
              <S.PriceInfoText>{priceInfo.title}</S.PriceInfoText>

              <S.Price>{priceInfo.price}</S.Price>

              <S.PriceInfoText>{priceInfo.limitation}</S.PriceInfoText>
            </S.PriceInfoWrapper>
          );
        })}

        <S.CustomText>5% de desconto pagando por recorrência.</S.CustomText>

        <S.CustomText>
          Aulas com 60 minutos de duração | Minimo 3 alunes por turma.
        </S.CustomText>
      </S.PricesBody>
    </>
  );
};
