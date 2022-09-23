import * as S from "./style";

export const Footer: React.FC = () => {
  return (
    <S.Footers>
      <S.SpanWrapper>
        <S.Span>contato@lustypole.com</S.Span>
        <S.Span>Exclusivo para Whatsapp: (51) 98060.6459</S.Span>
        <S.Span>
          Rua Lopo Gonçalves, 677 - Cidade Baixa | Porto Alegre - RS
        </S.Span>
      </S.SpanWrapper>
      <S.GoBack href="#little-buddy">
        Voltar ao inicio
        <S.Arrow src="arrow-up.svg" />
      </S.GoBack>
    </S.Footers>
  );
};
