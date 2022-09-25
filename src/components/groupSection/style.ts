import styled from "styled-components";

export const GroupContainer = styled.div`
  height: 1200px;
  display: flex;
  flex-direction: column;
  place-items: flex-start;
  place-content: center;
  background-image: url("groupphoto.png");
  background-size: cover;

  @media (max-width: 440px) {
    flex-flow: column wrap;
    width: 100%;
    height: 400px;
  }

  @media (min-width: 441px) and (max-width: 810px) {
    height: 800px;
  }
`;

export const GroupText = styled.span`
  color: var(--pink);
  font-size: 52px;
  font-weight: bold;
  text-shadow: 2px 2px 1px var(--black);
  width: 40%;
  margin-left: 160px;

  @media (max-width: 440px) {
    margin-left: 4px;
    width: 100%;
    font-size: 24px;
  }

  @media (min-width: 441px) and (max-width: 810px) {
    margin-left: 4px;
    width: 100%;
    font-size: 44px;
  }
`;

export const GroupBtn = styled.a`
  margin: 24px 0 0 160px;
  padding: 16px;
  background-color: var(--pink);
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 18px;
  transition: border-color 0.3s;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  color: var(--white);

  &:hover {
    border-color: var(--black);
  }

  @media (max-width: 440px) {
    margin: 16px 0 0 6px;
  }

  @media (min-width: 441px) and (max-width: 810px) {
    margin: 8px 0 0 6px;
  }
`;
