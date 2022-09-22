import * as S from "./style";

export const Header: React.FC = () => {
  return (
    <S.Headers>
      <S.LinksWrapper>
        <S.Links>Home</S.Links>
        <S.Links>Matrículas</S.Links>
        <S.Links>Calendário</S.Links>
        <S.Links>Preços</S.Links>
        <S.Links>Quem somos?</S.Links>
      </S.LinksWrapper>
    </S.Headers>
  );
};
