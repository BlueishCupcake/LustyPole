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
`;

export const LinksWrapper = styled.div`
  display: flex;
  place-content: space-between;
  width: 400px;
  padding: 24px 240px 0 0;
`;

export const Links = styled.a`
  color: var(--black);
  line-height: 50px;
  text-align: center;
  cursor: pointer;

  transition: 0.4s;

  &:hover {
    color: var(--pink);
  }
`;
