import styled from "styled-components";

type LinksTypes = {
  isActive: boolean;
};

export const Headers = styled.header`
  height: 80px;
  background-color: var(--white);
  display: flex;
  place-items: space-between;
  place-content: end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  @media (max-width: 440px) {
    place-content: flex-start;
    place-items: flex-start;
    flex-flow: column wrap;
    height: 44px;
  }

  @media (min-width: 441px) and (max-width: 810px) {
    height: 60px;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  place-content: space-between;
  place-items: center;
  padding: 0 240px 0 0;

  @media (max-width: 440px) {
    place-content: flex-start;
    place-items: flex-start;
    flex-flow: column wrap;
    height: 44px;
    padding: 0;
  }

  @media (min-width: 441px) and (max-width: 810px) {
    height: 44px;
    place-content: center;
    place-items: center;
  }
`;

export const Links = styled.span<LinksTypes>`
  display: flex;

  > a {
    display: flex;
    color: ${({ isActive }) => (isActive ? `var(--white)` : `var(--black)`)};
    background-color: ${({ isActive }) =>
      isActive ? `var(--pink)` : `transparent`};

    line-height: 50px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    padding: 24px;

    transition: background-color 0.3s, color 0.3s;

    &:hover {
      color: ${({ isActive }) => (isActive ? `var(--black)` : `var(--pink)`)};
    }
    @media (max-width: 440px) {
      padding: 0 8px;
      font-size: 14px;
    }

    @media (max-width: 360px) {
      padding: 0 4px;
      font-size: 14px;
    }

    @media (min-width: 441px) and (max-width: 810px) {
      padding: 20px;
      font-size: 16px;
    }
  }
`;
