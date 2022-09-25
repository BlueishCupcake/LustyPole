import styled from "styled-components";

export const AboutBody = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  line-height: 28px;
`;

export const HistorySection = styled.section`
  width: 50%;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 810px) {
    width: 100%;
    padding: 0 12px;
  }
`;

export const PhotoSection = styled.section`
  height: 520px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 810px) {
    display: none;
  }
`;

export const Photo = styled.img`
  height: 520px;
`;

export const WorkSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--grey);
  margin: 0 auto;
  place-content: center;
  padding: 0 540px;

  @media (max-width: 810px) {
    width: 100%;
    padding: 0 12px;
  }
`;

export const VideoSection = styled.section`
  display: flex;
  flex-flow: column;
  place-items: center;
  background-color: var(--grey);

  @media (max-width: 810px) {
    width: 100%;
  }
`;

export const Video = styled.iframe`
  width: 100%;
  margin-top: 32px;
  height: 800px;

  @media (max-width: 810px) {
    height: 400px;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  text-transform: uppercase;
`;

export const SubTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  margin: 20px auto;
  font-size: 20px;
`;
