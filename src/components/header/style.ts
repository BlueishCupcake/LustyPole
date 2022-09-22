import styled from "styled-components";

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
`;

export const LinksWrapper = styled.div`
  display: flex;
  place-content: space-between;
  place-items: center;
  padding: 0 240px 0 0;
`;

export const Links = styled.span`
  > a {
    color: var(--black);
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    padding: 24px;

    transition: color 0.3s;

    &:hover {
      color: var(--pink);
    }
  }
`;
