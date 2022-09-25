import styled from "styled-components";

export const StatementH2 = styled.h2`
  text-align: center;
  margin-top: 40px;
`;

export const StatementsBody = styled.section`
  height: 600px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;

  @media (max-width: 440px) {
    height: 1400px;
  }
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
