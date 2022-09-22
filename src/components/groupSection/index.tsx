import * as S from "./style";

export const GroupSection: React.FC = () => {
  return (
    <S.GroupContainer>
      <S.GroupText>
        Transformamos vidas permitindo às pessoas explorarem o Pole Dance em um
        ambiente aconchegante e acolhedor.
      </S.GroupText>

      <S.GroupBtn
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5551980606459&text=Ol%C3%A1%2C%20gostaria%20de%20receber%20informa%C3%A7%C3%B5es%20sobre%20as%20matr%C3%ADculas%20de%20aulas%20de%20Pole%20Dance"
      >
        Fale Conosco
      </S.GroupBtn>
    </S.GroupContainer>
  );
};
