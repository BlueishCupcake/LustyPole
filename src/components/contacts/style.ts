import styled from "styled-components";

export const ContactsSection = styled.section`
  background-color: var(--grey);
  height: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: wrap;
`;

export const PostsWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const PoleDancer = styled.img`
  margin: 0 auto;
`;

export const ContactsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContactsInfoWrapper = styled.div`
  height: 50%;
  display: flex;
  flex-flow: column wrap;
  place-content: center;
  place-items: center;
`;

export const RegisterInfo = styled.p`
  font-size: 24px;
  text-align: center;
  width: 50%;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

export const Links = styled.a`
  width: 360px;
  padding: 16px;
  display: flex;
  place-content: center;

  cursor: pointer;
  text-decoration: none;
  font-size: 24px;
  color: var(--black);
  transition: 0.3s;

  &:hover {
    box-shadow: 1px 1px 6px var(--pink);
  }
`;

export const ContactText = styled.span`
  padding-left: 8px;
`;

export const SocialMediaWrapper = styled.div`
  height: 50%;
  display: flex;
  flex-flow: column wrap;
  place-content: center;
  place-items: center;
`;
