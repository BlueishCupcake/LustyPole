import styled from "styled-components";

export const GroupContainer = styled.div`
  height: 1200px;
  display: flex;
  flex-direction: column;
  place-items: flex-start;
  place-content: center;
  background-image: url("groupphoto.png");
  background-size: cover;
`;

export const GroupText = styled.span`
  color: var(--pink);
  font-size: 52px;
  font-weight: bold;
  text-shadow: 2px 2px 1px var(--black);
  width: 600px;
  margin-left: 160px;
`;

export const GroupBtn = styled.a`
  margin: 24px 0 0 160px;
  padding: 16px;
  width: 200px;
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
`;
