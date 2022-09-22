import styled from "styled-components";

export const StatementsBody = styled.section`
  width: 680px;
  height: 600px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
`;

export const Statement = styled.p`
  font-size: 28px;
  line-height: 40px;
  color: var(--black);
  text-align: center;
`;

export const Author = styled.p`
  text-align: center;
  color: var(--black);
  font-size: 24px;
  font-weight: bold;
`;
