import { Link, useLocation } from "react-router-dom";

import * as S from "./style";

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <S.Headers>
      <S.LinksWrapper>
        <S.Links isActive={location.pathname === "/"}>
          <Link to="/"> Home</Link>
        </S.Links>

        <S.Links isActive={location.pathname === "/matriculas"}>
          <Link to="/matriculas"> Matrículas</Link>
        </S.Links>

        <S.Links isActive={location.pathname === "/calendario"}>
          <Link to="/calendario"> Calendário</Link>
        </S.Links>

        <S.Links isActive={location.pathname === "/precos"}>
          <Link to="/precos"> Preços</Link>
        </S.Links>

        <S.Links isActive={location.pathname === "/quem-somos"}>
          <Link to="/quem-somos"> Quem somos?</Link>
        </S.Links>
      </S.LinksWrapper>
    </S.Headers>
  );
};
