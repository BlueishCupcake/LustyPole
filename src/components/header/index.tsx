import { Link } from "react-router-dom";

import * as S from "./style";

export const Header: React.FC = () => {
  return (
    <S.Headers>
      <S.LinksWrapper>
        <S.Links>
          <Link to="/"> Home</Link>
        </S.Links>

        <S.Links>
          <Link to="/"> Matrículas</Link>
        </S.Links>

        <S.Links>
          <Link to="/calendario"> Calendário</Link>
        </S.Links>

        <S.Links>
          <Link to="/"> Preços</Link>
        </S.Links>

        <S.Links>
          <Link to="/"> Quem somos?</Link>
        </S.Links>
      </S.LinksWrapper>
    </S.Headers>
  );
};
