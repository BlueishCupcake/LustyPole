import { registerTexts } from "helpers/paymentInfo/registerInstructions";

import * as S from "./style";

export const RegisterInstructions: React.FC = () => {
  return (
    <>
      <S.InstructionsBody>
        <h2>Como faço a minha matricula?</h2>
        <S.CardsWrapper>
          {registerTexts.map((info) => {
            return (
              <S.InfoCard key={info.id}>
                <h2>{info.id}</h2>
                <S.CardTitle>{info.title}</S.CardTitle>
                <S.CardText>{info.description}</S.CardText>
              </S.InfoCard>
            );
          })}
        </S.CardsWrapper>
      </S.InstructionsBody>
    </>
  );
};
