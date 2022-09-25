import styled from "styled-components";

export const Footers = styled.footer`
  background-color: var(--black);
  height: 200px;
  width: 100%;
  position: relative;
  bottom: 0;
  right: 0;
  display: flex;
  place-content: center;
  place-items: center;
  flex-flow: wrap;
`;

export const SpanWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

export const Span = styled.span`
  color: var(--white);
  line-height: 26px;
  font-weight: bold;
  text-align: center;
`;

export const GoBack = styled.a`
  color: var(--white);
  background-color: transparent;
  position: absolute;
  bottom: 20px;
  right: 40px;
  font-size: 16px;
  padding: 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    color: var(--pink);
  }

  @media (max-width: 440px) {
    font-size: 12px;
    bottom: 0;
    right: 0;
  }

  @media (min-width: 441px) and (max-width: 810px) {
    bottom: 0;
    right: 0;
  }
`;

export const Arrow = styled.img`
  position: absolute;
  bottom: 2px;
  right: 130px;
  background-color: var(--white);
  border: 1px solid var(--white);
  border-radius: 50%;
  padding: 4px;

  @media (max-width: 440px) {
    bottom: 4px;
    right: 96px;
    background-color: var(--white);
    border: 1px solid var(--white);
    width: 32px;
  }

  @media (min-width: 441px) and (max-width: 810px) {
    bottom: 4px;
    right: 124px;
    width: 32px;
  }
`;
