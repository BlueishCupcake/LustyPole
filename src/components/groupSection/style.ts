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
  color: var(--black);
  font-size: 52px;
  font-weight: bold;
  width: 600px;
  margin-left: 160px;
`;

export const GroupBtn = styled.a`
  margin: 24px 0 0 160px;
  padding: 16px;
  width: 200px;
  background-color: var(--white);
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 16px;
  transition: 0.3s;
  text-align: center;
  text-decoration: none;
  color: var(--black);

  &:hover {
    border: 1px solid var(--black);
  }
`;
